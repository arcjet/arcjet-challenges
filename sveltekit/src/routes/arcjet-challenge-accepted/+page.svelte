<script lang="ts">
  import RateLimited from "../../components/RateLimited.svelte";
  import NotRateLimited from "../../components/NotRateLimited.svelte";

  // We include the correct component based on the value of limited
  export let data: { limited: boolean };
</script>

<svelte:head>
  <title>Arcjet Challenge Accepted</title>
</svelte:head>

<h1>Arcjet Challenge Accepted!</h1>

{#if data.limited}
  <RateLimited />
{:else}
  <NotRateLimited />
{/if}