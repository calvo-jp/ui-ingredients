<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {mergeProps} from 'ui-ingredients';
  import {getTableContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['td'] = $props();

  let table = getTableContext();
  let mergedProps = $derived(mergeProps(props, table.getCellProps()));
</script>

<td {...mergedProps}>
  {@render children?.()}
</td>
