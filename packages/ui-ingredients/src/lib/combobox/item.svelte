<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/combobox';
  import type {Snippet} from 'svelte';

  export interface ComboboxItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, item, persistFocus, ...props}: ComboboxItemProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = $derived({
    item,
    persistFocus,
  });

  let state = $derived(combobox.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, combobox.getItemProps(itemProps)));

  comboboxItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
