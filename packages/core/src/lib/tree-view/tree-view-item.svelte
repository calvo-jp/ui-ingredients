<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tree-view';

  export interface TreeViewItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      Omit<ItemProps, 'depth'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTreeViewContext,
    getTreeViewTreePropsContext,
    setTreeViewItemPropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewItemProps = $props();

  let treeView = getTreeViewContext();
  let treeViewProps = getTreeViewTreePropsContext();

  let [itemPartialProps, localProps] = $derived(
    createSplitProps<Omit<ItemProps, 'depth'>>(['value', 'disabled'])(props),
  );

  let itemProps: ItemProps = reflect(() => ({
    ...itemPartialProps,
    ...treeViewProps,
  }));

  let itemState = $derived(treeView.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(treeView.getItemProps(itemProps), localProps),
  );

  setTreeViewItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
