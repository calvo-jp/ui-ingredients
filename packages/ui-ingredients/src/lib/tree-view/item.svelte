<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {
    /**/
    depth,
    value,
    disabled,
    children,
    ...props
  }: TreeViewItemProps = $props();

  let treeView = treeViewContext.get();
  let itemProps: ItemProps = $derived({
    depth,
    value,
    disabled,
  });

  let attrs = $derived(mergeProps(props, treeView.getItemProps(itemProps)));
  let state = $derived(treeView.getItemState(itemProps));

  treeViewItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
