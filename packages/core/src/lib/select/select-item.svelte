<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/select';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SelectItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getSelectContext,
    setSelectItemPropsContext,
  } from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectItemProps = $props();

  let select = getSelectContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['item', 'persistFocus'])(props),
  );

  let itemState = $derived(select.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(select.getItemProps(itemProps), localProps),
  );

  setSelectItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
