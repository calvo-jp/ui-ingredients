<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/menu';
  import type {Snippet} from 'svelte';

  export interface MenuItemProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setMenuItemPropsContext, useMenuContext} from './context.svelte.js';

  let {
    value,
    valueText,
    disabled,
    closeOnSelect,
    children,
    ...props
  }: MenuItemProps = $props();

  let context = useMenuContext();

  let state = $derived(
    context.getItemState({
      value,
      valueText,
      disabled,
      closeOnSelect,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        value,
        valueText,
        disabled,
        closeOnSelect,
      }),
    ),
  );

  setMenuItemPropsContext({
    value,
    valueText,
    disabled,
    closeOnSelect,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
