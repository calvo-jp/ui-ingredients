<script lang="ts">
  import Markdown from '../../markdown.svelte';

  let {data} = $props();
</script>

<Markdown {...data} />
