<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {mergeProps} from 'ui-ingredients';
  import {getTableContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['tbody'] = $props();

  let table = getTableContext();
  let mergedProps = $derived(mergeProps(props, table.getBodyProps()));
</script>

<tbody {...mergedProps}>
  {@render children?.()}
</tbody>
