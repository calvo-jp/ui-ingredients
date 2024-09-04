<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/combobox';

  export interface ComboboxItemProps
    extends Assign<HtmlIngredientProps<'div', ItemState>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getComboboxContext,
    setComboboxItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemProps = $props();

  let combobox = getComboboxContext();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['item', 'persistFocus'])(props),
  );

  let itemState = $derived(combobox.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(otherProps, combobox.getItemProps(itemProps)),
  );

  setComboboxItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
