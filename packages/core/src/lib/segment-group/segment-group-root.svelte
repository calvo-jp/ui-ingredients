<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSegmentGroupProps,
    CreateSegmentGroupReturn,
  } from './create-segment-group.svelte.js';

  export interface SegmentGroupProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSegmentGroupReturn>,
      CreateSegmentGroupProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSegmentGroup} from './create-segment-group.svelte.js';
  import {setSegmentGroupContext} from './segment-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SegmentGroupProps = $props();

  let [createSegmentGroupProps, localProps] = $derived(
    createSplitProps<CreateSegmentGroupProps>([
      'id',
      'ids',
      'form',
      'name',
      'value',
      'disabled',
      'readOnly',
      'orientation',
      'onValueChange',
    ])(props),
  );

  let segmentGroup = createSegmentGroup(reflect(() => createSegmentGroupProps));

  let mergedProps = $derived(
    mergeProps(segmentGroup.getRootProps(), localProps),
  );

  setSegmentGroupContext(segmentGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, segmentGroup)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(segmentGroup)}
  </div>
{/if}
