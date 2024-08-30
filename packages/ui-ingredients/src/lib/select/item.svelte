<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/select';
  import type {Snippet} from 'svelte';

  export interface SelectItemProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemProps = $props();

  let select = selectContext.get();

  let [itemProps, otherProps] = createSplitProps<ItemProps>(['item', 'persistFocus'])(props);

  let itemState = $derived(select.getItemState(itemProps));
  let mergedProps = $derived(mergeProps(props, select.getItemProps(itemProps)));

  selectItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
