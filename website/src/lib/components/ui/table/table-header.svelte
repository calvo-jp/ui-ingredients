<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {mergeProps} from 'ui-ingredients';
  import {getTableContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['thead'] = $props();

  let table = getTableContext();
  let mergedProps = $derived(mergeProps(props, table.getHeaderProps()));
</script>

<thead {...mergedProps}>
  {@render children?.()}
</thead>
