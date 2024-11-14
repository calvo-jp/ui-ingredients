<script lang="ts">
  import {Prose} from '$lib/ui';

  let {data} = $props();
</script>

<svelte:head>
  <title>Getting Started | UI Ingredients</title>
</svelte:head>

<Prose>
  {@html data.html}
</Prose>
