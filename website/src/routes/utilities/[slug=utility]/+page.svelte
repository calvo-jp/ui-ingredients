<script lang="ts">
  import Metadata from '$lib/metadata.svelte';
  import {Prose} from '$lib/ui';

  let {data} = $props();
</script>

<svelte:head>
  <title>{data.name.formal} | UI Ingredients</title>
</svelte:head>

<Metadata title={data.name.formal} description={data.description} />

<Prose>
  <h1 class="mb-0">{data.name.pascal}</h1>
  <p class="m-0 mt-2.5">{data.description}</p>

  {@html data.html}
</Prose>
