<script lang="ts">
  let {data} = $props();
</script>

<svelte:head>
  <meta property="og:title" content="" />
  <meta name="twitter:title" content="" />
  <meta name="description" content="" />
  <meta name="twitter:description" content="" />
  <meta property="og:description" content="" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="" />
  <meta property="og:image" content="" />
  <meta name="twitter:site" content="UI Ingredients" />
  <meta property="og:site_name" content="UI Ingredients" />
</svelte:head>

{@html data.html}
