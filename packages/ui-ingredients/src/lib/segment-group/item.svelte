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
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {parts} from './anatomy.js';
  import {
    getSegmentGroupContext,
    setSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, asChild, ...props}: SegmentGroupItemProps = $props();

  let segmentGroup = getSegmentGroupContext();

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

  setSegmentGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <label {...mergedProps}>
    {@render children?.(itemState)}
  </label>
{/if}
