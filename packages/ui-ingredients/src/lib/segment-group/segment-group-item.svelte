<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SegmentGroupItemProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'invalid', 'disabled'])(props),
  );

  let segmentGroup = getSegmentGroupContext();
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
