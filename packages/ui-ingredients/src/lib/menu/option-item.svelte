<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {OptionItemProps, OptionItemState} from '@zag-js/menu';
  import type {Snippet} from 'svelte';

  export interface MenuOptionItemProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, OptionItemProps> {
    children?: Snippet<[state: OptionItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {
    type,
    value,
    checked,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
    children,
    ...props
  }: MenuOptionItemProps = $props();

  let menu = menuContext.get();
  let itemProps: OptionItemProps = $derived({
    type,
    value,
    checked,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
  });

  let state = $derived(menu.getOptionItemState(itemProps));
  let attrs = $derived(mergeProps(props, menu.getOptionItemProps(itemProps)));

  menuOptionItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
