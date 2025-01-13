<script lang="ts">
  import MetaTags from '$lib/components/meta-tags.svelte';

  let {data} = $props();
</script>

<svelte:head>
  <title>UI Ingredients</title>
</svelte:head>

<MetaTags />

{@html data.html}
