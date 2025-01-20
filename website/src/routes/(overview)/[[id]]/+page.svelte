<script lang="ts">
  let {data} = $props();

  let {id, title, content} = $derived(data);
</script>

<svelte:head>
  <title>{title} | UI Ingredients</title>
</svelte:head>

{@html content}
