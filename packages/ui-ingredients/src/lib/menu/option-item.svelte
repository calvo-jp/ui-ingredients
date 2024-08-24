<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, PickPartial} from '$lib/types.js';
  import type {OptionItemProps, OptionItemState} from '@zag-js/menu';
  import type {Snippet} from 'svelte';

  export interface MenuOptionItemProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      PickPartial<OptionItemProps, 'type' | 'checked'>
    > {
    children?: Snippet<[state: OptionItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {
    type = 'checkbox',
    value,
    checked = false,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
    children,
    ...props
  }: MenuOptionItemProps = $props();

  let context = menuContext.get();

  let itemProps = $derived({
    type,
    value,
    checked,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
  });

  let state = $derived(context.getOptionItemState(itemProps));
  let attrs = $derived(mergeProps(props, context.getOptionItemProps(itemProps)));

  menuOptionItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
