<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/combobox';
  import type {Snippet} from 'svelte';

  export interface ComboboxItemProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, item, persistFocus, ...props}: ComboboxItemProps = $props();

  let context = comboboxContext.get();

  let itemProps = $derived({
    item,
    persistFocus,
  });

  let state = $derived(context.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, context.getItemProps(itemProps)));

  comboboxItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
