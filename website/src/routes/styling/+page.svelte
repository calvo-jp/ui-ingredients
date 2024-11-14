<script lang="ts">
  import {Prose} from '$lib/ui';

  let {data} = $props();
</script>

<svelte:head>
  <title>Styling | UI Ingredients</title>
</svelte:head>

<Prose>
  {@html data.html}
</Prose>
