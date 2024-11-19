<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {mergeProps} from 'ui-ingredients';
  import {getTableContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['tfoot'] = $props();

  let table = getTableContext();
  let mergedProps = $derived(mergeProps(props, table.getFooterProps()));
</script>

<tfoot {...mergedProps}>
  {@render children?.()}
</tfoot>
