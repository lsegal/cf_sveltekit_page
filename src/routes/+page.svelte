<script>
  import { enhance } from "$app/forms";
  import Button from "@smui/button";
</script>

<main>
  <form action="/game?/new" method="post" use:enhance>
    <Button variant="raised" type="submit">Create a New Game</Button>
  </form>
  <div>- or -</div>
  <form class="gameid-form" action="/game?/go" method="post" use:enhance>
    <label for="gameId">Enter Game ID:</label>
    <input type="text" name="gameId" />
    <Button variant="outlined" type="submit">Go</Button>
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 260px;
  }
  .gameid-form {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
</style>
