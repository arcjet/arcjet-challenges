<script lang="ts">
  import RateLimited from "../../components/RateLimited.svelte";
  import NotRateLimited from "../../components/NotRateLimited.svelte";
  export let data: { rateLimited: boolean };
</script>

<svelte:head>
  <title>Arcjet Security Challenge - SvelteKit</title>
</svelte:head>

<h1>Arcjet Security Challenge - SvelteKit</h1>

{#if data.rateLimited}
  <RateLimited />
{:else}
  <NotRateLimited />
{/if}
