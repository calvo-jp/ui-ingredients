<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/combobox';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ComboboxItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {
    getComboboxContext,
    setComboboxItemPropsContext,
  } from './combobox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['item', 'persistFocus'])(props),
  );

  let combobox = getComboboxContext();
  let itemState = $derived(combobox.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(combobox.getItemProps(itemProps), localProps),
  );

  setComboboxItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
