<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/menu';
  import type {Snippet} from 'svelte';

  export interface MenuItemProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuItemProps = $props();

  let menu = menuContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['value', 'valueText', 'disabled', 'closeOnSelect'])(props),
  );

  let itemState = $derived(menu.getItemState(itemProps));
  let mergedProps = $derived(mergeProps(otherProps, menu.getItemProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
