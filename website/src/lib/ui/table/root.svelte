<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['table'] = $props();
</script>

<table {...props}>
  {@render children?.()}
</table>
