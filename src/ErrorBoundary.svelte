<script>
  import { error } from "./authStore";
  export let tryAgain;

  $error = null;

  const setError = (err) => {
    $error = err;
    console.error("Error caught by ErrorBoundary:", $error);
  };
</script>

{#if $error}
  <div>
    <h2 style="color: red;">Something went wrong!</h2>
    <p>{$error.message}</p>
    <button on:click={tryAgain}>Try Again</button>
  </div>
{:else}
  <slot />
{/if}
