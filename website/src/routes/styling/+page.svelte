<script lang="ts">
  import MetaTags from '$lib/components/meta-tags.svelte';

  let {data} = $props();
</script>

<MetaTags />

{@html data.html}
