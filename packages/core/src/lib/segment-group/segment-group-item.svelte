<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';

  export interface SegmentGroupItemProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSegmentGroupContext,
    setSegmentGroupItemPropsContext,
  } from './segment-group-context.svelte.js';

  let {
    ref = $bindable(null),
    children,
    asChild,
    ...props
  }: SegmentGroupItemProps = $props();

  let segmentGroup = getSegmentGroupContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'invalid', 'disabled'])(props),
  );

  let itemState = $derived(segmentGroup.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(segmentGroup.getItemProps(itemProps), localProps),
  );

  setSegmentGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </label>
{/if}
