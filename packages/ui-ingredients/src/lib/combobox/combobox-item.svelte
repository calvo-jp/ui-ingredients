<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/combobox';

  export interface ComboboxItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getComboboxContext,
    setComboboxItemPropsContext,
  } from './combobox-context.svelte.js';

  let {this: e, asChild, children, ...props}: ComboboxItemProps = $props();

  let combobox = getComboboxContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['item', 'persistFocus'])(props),
  );

  let itemState = $derived(combobox.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(localProps, combobox.getItemProps(itemProps)),
  );

  setComboboxItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
