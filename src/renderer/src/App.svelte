<script lang="ts">
  import Bottleneck from "bottleneck";
  import Mustache from "mustache";
  import Totals from "./components/Totals.svelte";
  import {
    countryByNumber,
    priceByNumber,
    segments,
    type Pricing,
  } from "./lib/pricing";

  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: Math.floor(1000 / 10),
  });

  let phone_numbers: (Pricing & Record<string, any>)[] = [];
  let message = "";
  let loading = false;

  let dragged = false;

  const renderMessage = (
    message: string,
    phone: Pricing & Record<string, any>
  ) => {
    try {
      return Mustache.render(message, phone);
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const sendMessage = limiter.wrap(async (idx: number, message: string) => {
    phone_numbers[idx].status = "queued";

    const _message = renderMessage(message, phone_numbers[idx]);
    if (!_message) {
      throw new Error("Message is empty");
    }

    try {
      // @ts-ignore
      const rs = await window.api.sendMessage({
        idx,
        phone: phone_numbers[idx].mobile,
        message: _message,
      });

      if (!rs.success) {
        throw new Error(rs.message);
      }

      if (rs.idx !== idx) {
        throw new Error("Invalid response");
      }

      phone_numbers[idx].status = "sent";
      phone_numbers[idx].error = undefined;
    } catch (error) {
      phone_numbers[idx].status = "failed";
      phone_numbers[idx].error = (error as any).message;
    } finally {
    }
  });

  const loadNumbersText = (text: string) => {
    const numbers = text.split("\n");

    phone_numbers = [];

    numbers.forEach((number) => {
      const mobile = number.replace("\r", "").trim();
      if (!mobile) return;
      if (!mobile.startsWith("+")) return;
      if (phone_numbers.some((p) => p.mobile === mobile)) return;

      phone_numbers.push({
        mobile,
        price: priceByNumber(mobile),
        country: countryByNumber(mobile),
        status: "ready",
      });
    });
  };

  const loadNumbersCSV = (text: string) => {
    const numbers = text.split("\n");

    const [headers] = numbers;
    const arrHeaders = headers.split(",").map((h) => h.toLowerCase().trim());

    const index = arrHeaders.indexOf("mobile");

    if (index === -1) {
      alert("CSV must have a header with 'mobile' column");
      return;
    }

    phone_numbers = [];

    numbers.forEach((number) => {
      const mobile = number.split(",")[index].replace("\r", "").trim();
      if (!mobile) return;
      if (!mobile.startsWith("+")) return;
      if (phone_numbers.some((p) => p.mobile === mobile)) return;

      const obj = {};
      arrHeaders.forEach((h, i) => {
        obj[h] = number.split(",")[i].replace("\r", "").trim();
      });

      phone_numbers.push({
        price: priceByNumber(mobile),
        country: countryByNumber(mobile),
        status: "ready",
        ...obj,
        mobile,
      });
    });
  };

  const handleData = (text: string) => {
    if (text.includes(",")) {
      loadNumbersCSV(text);
    } else {
      loadNumbersText(text);
    }

    if (phone_numbers.length === 0) {
      alert("No phone numbers found");
    }
  };

  const onPaste = (e: ClipboardEvent) => {
    // @ts-ignore
    if (e.target?.tagName === "TEXTAREA") return;

    e.preventDefault();

    const text = e?.clipboardData?.getData("text") || "";

    handleData(text);
  };

  const readFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result as string;
      handleData(text);
    };

    reader.readAsText(file);

    dragged = false;
  };
</script>

<svelte:window on:paste={onPaste} />

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Phone Number</th>
        <th>Message Segments</th>
        <th>Price</th>
        <th>Status</th>
        <th>Error</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#if phone_numbers.length > 0}
        {#each phone_numbers as phone, i}
          <tr>
            <td>{phone.mobile}</td>
            <td>{segments(renderMessage(message, phone))}</td>
            <td>{phone.price * segments(renderMessage(message, phone))}</td>
            <td>{phone.status}</td>
            <td>{phone.error ?? ""}</td>
            <td>
              {#if phone.status === "failed"}
                <button
                  class="rounded-md bg-red-500 px-8 py-2 text-lg uppercase text-white duration-100 ease-in-out hover:bg-red-600"
                  on:click={async () => {
                    loading = true;

                    try {
                      if (!message) {
                        alert("Please enter a message");
                        return;
                      }

                      await sendMessage(i, message);
                    } catch (error) {
                    } finally {
                      loading = false;
                    }
                  }}
                >
                  Retry
                </button>
              {/if}
            </td>
          </tr>
        {/each}
      {:else}
        <tr>
          <td colspan="6">
            <label
              class="file-drop"
              class:dragged
              on:drop={(e) => {
                e.preventDefault();

                // @ts-ignore
                if (e.dataTransfer.items) {
                  // @ts-ignore
                  [...e.dataTransfer.items].forEach((item, i) => {
                    // If dropped items aren't files, reject them
                    if (item.kind === "file") {
                      const file = item.getAsFile();
                      // @ts-ignore
                      readFile(file);
                    }
                  });
                } else {
                  // @ts-ignore
                  [...e.dataTransfer.files].forEach((file, i) => {
                    readFile(file);
                  });
                }
              }}
              on:dragover={(e) => {
                e.preventDefault();
                dragged = true;
              }}
              on:dragleave={(e) => {
                e.preventDefault();
                dragged = false;
              }}
              on:dragend={(e) => {
                e.preventDefault();
                dragged = false;
              }}
              aria-dropeffect="copy"
            >
              <p>
                No phone numbers loaded. Paste or drag and drop a list or CSV.
              </p>
              <input
                type="file"
                accept=".csv"
                on:change={(e) => {
                  // @ts-ignore
                  if (e.target.files) {
                    // @ts-ignore
                    readFile(e.target.files[0]);
                  }
                }}
              />
            </label>
          </td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
<div class="message">
  <textarea
    disabled={loading}
    bind:value={message}
    placeholder="Message. If you paste a CSV, use {`{{header}}`} to insert values from the CSV. E.g. Hello {`{{name}}`}!"
  ></textarea>
  <span>{message.length}</span>
</div>
<div class="action">
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-missing-attribute-->
  <button
    type="button"
    disabled={loading}
    on:click={async () => {
      if (!message) {
        alert("Please enter a message");
        return;
      }

      loading = true;

      try {
        await Promise.all(
          phone_numbers
            .filter((p) => p.status === "ready")
            .map(async (_, i) => {
              return sendMessage(i, message);
            })
        );
      } catch (error) {
      } finally {
        loading = false;
      }
    }}>Send</button
  >
  <button
    type="button"
    disabled={loading}
    on:click={async () => {
      if (confirm("Are you sure you want to reset?")) {
        phone_numbers = [];
        message = "";
      }
    }}>Reset</button
  >
</div>
<Totals numbers={phone_numbers} {message} />

<style>
  .table-wrapper {
    overflow-y: auto;
    padding-block: 1rem;
    padding-inline: 1rem;
    max-height: calc(100vh - 20rem);
    max-height: calc(100dvh - 20rem);
    width: 100vw;

    & table {
      width: 100%;
      border-collapse: collapse;

      & th {
        font-weight: bold;
      }
      & th,
      & td {
        border: 1px solid #ddd;
        padding: 0.5rem;
        text-align: left;
      }
    }
  }

  .message {
    padding: 1rem;
    width: 80vw;
    text-align: right;
    & textarea {
      width: 100%;
      height: 4rem;
      padding: 0.5rem;
      font-size: 1rem;
    }
    & span {
      font-size: 0.8rem;
    }
  }

  .file-drop {
    padding: 1rem;
    text-align: center;
    display: block;
    cursor: pointer;

    &.dragged {
      background-color: #f0f0f0;
      color: #333;
    }

    & input {
      display: none;
    }
  }
</style>
