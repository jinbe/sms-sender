<script lang="ts">
  import Mustache from "mustache";
  import { round, segments, type Pricing } from "../lib/pricing";

  export let numbers: (Pricing & Record<string, any>)[];
  export let message: string;

  $: renderMessage = (phone: Pricing & Record<string, any>) => {
    try {
      return Mustache.render(message, phone);
    } catch (error) {
      console.error(error);
      return "";
    }
  };
</script>

<ul class="versions">
  <li class="electron-version">Recipients {numbers.length}</li>
  <li class="chrome-version">
    Est. Cost ${round(
      numbers.map((p) => p.price * segments(renderMessage(p))).reduce((p, c) => p + c, 0)
    ).toFixed(2)}
  </li>
</ul>
