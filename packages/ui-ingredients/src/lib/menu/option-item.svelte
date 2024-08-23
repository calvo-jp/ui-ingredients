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
  import {
    setMenuOptionItemPropsContext,
    useMenuContext,
  } from './context.svelte.js';

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

  let context = useMenuContext();

  let state = $derived(
    context.getOptionItemState({
      type,
      value,
      checked,
      disabled,
      valueText,
      closeOnSelect,
      onCheckedChange,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getOptionItemProps({
        type,
        value,
        checked,
        disabled,
        valueText,
        closeOnSelect,
        onCheckedChange,
      }),
    ),
  );

  setMenuOptionItemPropsContext({
    type,
    value,
    checked,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
