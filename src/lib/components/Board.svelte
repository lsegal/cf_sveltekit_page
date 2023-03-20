<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import type { GameData } from "../models/GameData";
  import Square from "./Square.svelte";

  export let data: GameData;
  let slen = Math.sqrt(data.board.length);

  onMount(() => {
    const interval = setInterval(
      async () => !data.winner && (await invalidate("data:game")),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  });
</script>

{#if data.winner}
  <div>Winner: <strong>{data.winner}</strong></div>
{:else}
  <div>Turn: <strong>{data.turn}</strong></div>
{/if}
<div style:height="1rem" />

{#each Array(slen) as _, row}
  <div style:display="flex">
    {#each Array(slen) as _, col}
      <Square
        turn={data.turn}
        pos={row * slen + col}
        value={data.board[row * slen + col] || ""}
      />
    {/each}
  </div>
{/each}
