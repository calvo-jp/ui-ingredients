<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/listbox';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ListboxItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {
    getListboxContext,
    setListboxItemPropsContext,
  } from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxItemProps = $props();

  let [itemProps, localProps] = createSplitProps<ItemProps>([
    'highlightOnHover',
    'item',
  ])(props);

  let listbox = getListboxContext();
  let itemState = $derived(listbox.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(listbox.getItemProps(itemProps), localProps),
  );

  setListboxItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
