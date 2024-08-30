<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupItemProps
    extends Assign<Omit<HTMLProps<'label'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {
    segmentGroupContext,
    segmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, asChild, ...props}: SegmentGroupItemProps = $props();

  let segmentGroup = segmentGroupContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['value', 'invalid', 'disabled'])(props),
  );

  let itemState = $derived(segmentGroup.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(
      otherProps,
      segmentGroup.getItemProps(itemProps),
      parts.item.attrs,
    ),
  );

  segmentGroupItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <label {...mergedProps}>
    {@render children?.(itemState)}
  </label>
{/if}
