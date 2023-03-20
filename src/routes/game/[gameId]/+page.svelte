<script lang="ts">
  import type { GameData } from "$lib/models/GameData";
  import Board from "$lib/components/Board.svelte";
  import Button from "@smui/button";
  export let data: GameData;
</script>

<Board {data} />

<div class="wrong-game">
  <a href="/">
    <Button variant="outlined">Wrong game?</Button>
  </a>
</div>

<style>
  .wrong-game {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
  }
</style>
