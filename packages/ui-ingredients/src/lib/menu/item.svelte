<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/menu';
  import type {Snippet} from 'svelte';

  export interface MenuItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext} from './context.svelte.js';

  let {value, valueText, disabled, closeOnSelect, children, ...props}: MenuItemProps = $props();

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

<div {...attrs}>
  {@render children?.(state)}
</div>
