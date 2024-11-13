<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['tfoot'] = $props();
</script>

<tfoot data-scope="table" data-part="footer" {...props}>
  {@render children?.()}
</tfoot>
