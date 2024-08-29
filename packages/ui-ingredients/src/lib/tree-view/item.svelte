<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<GenericHtmlProps, ItemState>;
    children?: Snippet<[state: ItemState]>;
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

  let attrs = $derived(mergeProps(props, treeView.getItemProps(itemProps)));
  let state = $derived(treeView.getItemState(itemProps));

  treeViewItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
