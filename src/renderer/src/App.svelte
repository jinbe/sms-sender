<script lang="ts">
  import Bottleneck from "bottleneck";
  import Totals from "./components/Totals.svelte";
  import { countryByNumber, priceByNumber, type Pricing } from "./lib/pricing";

  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: Math.floor(1000 / 10),
  });

  let phone_numbers: Pricing[] = [];
  let message = "";
  let loading = false;

  const sendMessage = limiter.wrap(async (idx: number) => {
    phone_numbers[idx].status = "queued";

    try {
      // @ts-ignore
      const rs = await window.api.sendMessage({
        idx,
        phone: phone_numbers[idx].mobile,
        message,
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
      const mobile = number.split(",")[0].replace("\r", "").trim();
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
</script>

<svelte:window
  on:paste={(e) => {
    e.preventDefault();
    const text = e?.clipboardData?.getData("text") || "";

    if (text.includes("\n")) {
      loadNumbersText(text);
    } else if (text.includes(",")) {
      // CSV
    }
  }}
/>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Phone Number</th>
        <th>Price</th>
        <th>Status</th>
        <th>Error</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#if phone_numbers.length > 0}
        {#each phone_numbers as { mobile, price, status, error }, i}
          <tr>
            <td>{mobile}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>{error ?? ""}</td>
            <td>
              {#if status === "failed"}
                <button
                  class="rounded-md bg-red-500 px-8 py-2 text-lg uppercase text-white duration-100 ease-in-out hover:bg-red-600"
                  on:click={async () => {
                    loading = true;

                    try {
                      if (!message) {
                        alert("Please enter a message");
                        return;
                      }

                      await sendMessage(i);
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
          <td colspan="5"> No phone numbers loaded. Paste list or CSV.</td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
<div class="message">
  <textarea disabled={loading} bind:value={message} placeholder="Message"
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
              return sendMessage(i);
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
    max-height: calc(100vh - 24rem);
    max-height: calc(100dvh - 24rem);
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
      height: 10rem;
      padding: 0.5rem;
      font-size: 1rem;
    }
    & span {
      font-size: 0.8rem;
    }
  }
</style>
