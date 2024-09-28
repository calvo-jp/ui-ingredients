<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTreeViewProps,
    CreateTreeViewReturn,
  } from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTreeViewReturn>,
      CreateTreeViewProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createTreeView} from './create-tree-view.svelte.js';
  import {setTreeViewContext} from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewProps = $props();

  let [createTreeViewProps, localProps] = $derived(
    createSplitProps<CreateTreeViewProps>([
      'id',
      'ids',
      'typeahead',
      'focusedValue',
      'expandedValue',
      'expandOnClick',
      'selectedValue',
      'selectionMode',
      'onFocusChange',
      'onExpandedChange',
      'onSelectionChange',
    ])(props),
  );

  let treeView = createTreeView(reflect(() => createTreeViewProps));

  let mergedProps = $derived(mergeProps(localProps, treeView.getRootProps()));

  setTreeViewContext(treeView);
</script>

{#if asChild}
  {@render asChild(mergedProps, treeView)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(treeView)}
  </div>
{/if}
