<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {mergeProps} from 'ui-ingredients';
  import {getTableContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['tr'] = $props();

  let table = getTableContext();
  let mergedProps = $derived(mergeProps(props, table.getRowProps()));
</script>

<tr {...mergedProps}>
  {@render children?.()}
</tr>
