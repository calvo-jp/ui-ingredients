<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['td'] = $props();
</script>

<td data-scope="table" data-part="cell" {...props}>
  {@render children?.()}
</td>
