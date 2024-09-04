<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/select';

  export interface SelectItemProps
    extends Assign<HtmlIngredientProps<'div', ItemState>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getSelectContext,
    setSelectItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemProps = $props();

  let select = getSelectContext();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['item', 'persistFocus'])(props),
  );

  let itemState = $derived(select.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(otherProps, select.getItemProps(itemProps)),
  );

  setSelectItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
