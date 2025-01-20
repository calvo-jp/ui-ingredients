<script lang="ts">
  import Markdown from '../../markdown.svelte';

  let {data} = $props();
  let {id, title, description, content} = $derived(data);
</script>

<Markdown {id} {title} {description} {content} />
