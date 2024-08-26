<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTreeViewProps, CreateTreeViewReturn} from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTreeViewProps> {
    children?: Snippet<[treeView: CreateTreeViewReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {treeViewContext} from './context.svelte.js';
  import {createTreeView} from './create-tree-view.svelte.js';

  let {
    id,
    ids,
    typeahead,
    focusedValue,
    expandedValue,
    expandOnClick,
    selectedValue,
    selectionMode,
    onFocusChange,
    onExpandedChange,
    onSelectionChange,
    children,
    ...props
  }: TreeViewProps = $props();

  let treeView = createTreeView({
    id,
    ids,
    typeahead,
    focusedValue,
    expandedValue,
    expandOnClick,
    selectedValue,
    selectionMode,
    onFocusChange,
    onExpandedChange,
    onSelectionChange,
  });

  let attrs = $derived(mergeProps(props, treeView.getRootProps()));

  treeViewContext.set(treeView);
</script>

<div {...attrs}>
  {@render children?.(treeView)}
</div>
