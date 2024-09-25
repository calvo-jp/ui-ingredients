<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tree-view';

  export interface TreeViewItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTreeViewContext,
    setTreeViewItemPropsContext,
  } from './tree-view-context.svelte.js';

  let {this: e, asChild, children, ...props}: TreeViewItemProps = $props();

  let treeView = getTreeViewContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['depth', 'value', 'disabled'])(props),
  );

  let itemState = $derived(treeView.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(localProps, treeView.getItemProps(itemProps)),
  );

  setTreeViewItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
