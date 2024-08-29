<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewItemProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {depth, value, disabled, asChild, children, ...props}: TreeViewItemProps = $props();

  let treeView = treeViewContext.get();
  let itemProps: ItemProps = $derived({
    depth,
    value,
    disabled,
  });

  let mergedProps = $derived(mergeProps(props, treeView.getItemProps(itemProps)));
  let itemState = $derived(treeView.getItemState(itemProps));

  treeViewItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
