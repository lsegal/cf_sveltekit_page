<script lang="ts">
  import { derived, writable } from "svelte/store";
  import { enhance } from "$app/forms";
  import Button from "@smui/button";

  export let turn: string;
  export let pos: number;
  export let value: string;

  const mouseOver = writable(false);
  const isPlaceholder = derived(
    mouseOver,
    ($mouseOver) => $mouseOver && !value
  );
</script>

<form method="post" use:enhance>
  <input type="hidden" name="pos" value={pos} />
  <div class="square">
    <Button
      variant="outlined"
      type="submit"
      class="mdc-button"
      on:mouseover={() => ($mouseOver = true)}
      on:mouseout={() => ($mouseOver = false)}
      style="height: 3.6rem; border-radius: 0"
    >
      <span
        style:font-weight={$isPlaceholder ? "normal" : "bold"}
        style:opacity={$isPlaceholder ? 0.3 : 1}
      >
        {$isPlaceholder ? turn : value}
      </span>
    </Button>
  </div>
</form>
