<script lang="ts">
  let {data} = $props();
</script>

<svelte:head>
  <title>{data.title} | UI Ingredients</title>
  <meta
    name="description"
    content="Headless component library for svelte powered by zag"
  />
  <meta property="og:title" content="UI Ingredients" />
  <meta
    property="og:description"
    content="Headless component library for svelte powered by zag"
  />
  <meta property="og:site_name" content="UI Ingredients" />
  <meta name="twitter:site" content="UI Ingredients" />
  <meta name="twitter:title" content="UI Ingredients" />
  <meta
    name="twitter:description"
    content="Headless component library for svelte powered by zag"
  />
</svelte:head>

{@html data.content}
