<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTreeViewProps, CreateTreeViewReturn} from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTreeViewProps> {
    asChild?: AsChild<GenericHtmlProps, CreateTreeViewReturn>;
    children?: Snippet<[treeView: CreateTreeViewReturn]>;
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

  let attrs = $derived(mergeProps<Record<string, any>>(props, treeView.getRootProps()));

  treeViewContext.set(treeView);
</script>

{#if asChild}
  {@render asChild(attrs, treeView)}
{:else}
  <div {...attrs}>
    {@render children?.(treeView)}
  </div>
{/if}
