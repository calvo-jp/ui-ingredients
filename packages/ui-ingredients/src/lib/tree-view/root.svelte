<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTreeViewProps, CreateTreeViewReturn} from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTreeViewProps> {
    asChild?: AsChild<CreateTreeViewReturn>;
    children?: Snippet<[CreateTreeViewReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
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

  let mergedProps = $derived(mergeProps(props, treeView.getRootProps()));

  treeViewContext.set(treeView);
</script>

{#if asChild}
  {@render asChild(mergedProps, treeView)}
{:else}
  <div {...mergedProps}>
    {@render children?.(treeView)}
  </div>
{/if}
