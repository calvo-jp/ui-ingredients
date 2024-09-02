<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewItemProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTreeViewContext,
    setTreeViewItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewItemProps = $props();

  let treeView = getTreeViewContext();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['depth', 'value', 'disabled'])(props),
  );

  let itemState = $derived(treeView.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(otherProps, treeView.getItemProps(itemProps)),
  );

  setTreeViewItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
