<script lang="ts">
  import Markdown from '../../markdown.svelte';

  let {data} = $props();
</script>

<svelte:head>
  <title>{data.title} | UI Ingredients</title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:site_name" content="UI Ingredients" />
  <meta name="twitter:site" content="UI Ingredients" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
</svelte:head>

<Markdown {...data} />
