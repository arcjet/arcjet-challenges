<script lang="ts">
  import RateLimited from "../../components/RateLimited.svelte";
  import NotRateLimited from "../../components/NotRateLimited.svelte";
  /**
   * Complete the challenge and use Arcjet to set the value of rateLimited to true
   * when the user has been rate limited.
   */
  // Arcjet code goes here...

  export let data: { rateLimited: boolean };
</script>

<svelte:head>
  <title>Arcjet Challenge Accepted</title>
</svelte:head>

<h1>Arcjet Challenge Accepted!</h1>

{#if data.rateLimited}
  <RateLimited />
{:else}
  <NotRateLimited />
{/if}
