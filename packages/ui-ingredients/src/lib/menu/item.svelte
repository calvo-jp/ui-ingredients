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
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {value, valueText, disabled, closeOnSelect, asChild, children, ...props}: MenuItemProps =
    $props();

  let menu = menuContext.get();
  let itemProps = $derived({
    value,
    valueText,
    disabled,
    closeOnSelect,
  });

  let state = $derived(menu.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, menu.getItemProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
