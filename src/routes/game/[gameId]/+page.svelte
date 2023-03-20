<script lang="ts">
  import type { GameData } from "$lib/models/GameData";
  import Board from "$lib/components/Board.svelte";
  import Button from "@smui/button";
  export let data: GameData;
</script>

<Board {data} />

<div style="margin-top: 1rem">
  <a href="/" style="text-decoration: none">
    <Button variant="outlined">Wrong game?</Button>
  </a>
</div>
