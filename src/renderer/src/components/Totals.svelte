<script lang="ts">
  import { round, type Pricing } from "../lib/pricing";

  export let numbers: Pricing[];
  export let message: string;

  const segments = (text: string) => {
    if (text.length <= 160) return 1;
    return Math.ceil(text.length / 160);
  };
</script>

<ul class="versions">
  <li class="electron-version">Recipients {numbers.length}</li>
  <li class="chrome-version">
    Est. Cost ${round(
      segments(message) * numbers.map((p) => p.price).reduce((p, c) => p + c, 0)
    ).toFixed(2)}
  </li>
</ul>
