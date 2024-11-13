<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['tfoot'] = $props();
</script>

<tfoot {...props}>
  {@render children?.()}
</tfoot>
