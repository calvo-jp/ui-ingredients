<script lang="ts">
  import MetaTags from '$lib/components/meta-tags.svelte';

  let {data} = $props();

  let {title, description, content} = $derived(data);
</script>

<svelte:head>
  <title>{title} | UI Ingredients</title>
</svelte:head>

<MetaTags {title} {description} />

{@html content}
