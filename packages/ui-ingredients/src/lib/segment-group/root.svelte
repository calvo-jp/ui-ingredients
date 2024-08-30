<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSegmentGroupProps,
    CreateSegmentGroupReturn,
  } from './create-segment-group.svelte.js';

  export interface SegmentGroupProps
    extends Assign<
      Omit<HTMLProps<'div'>, 'children'>,
      CreateSegmentGroupProps
    > {
    asChild?: AsChild<CreateSegmentGroupReturn>;
    children?: Snippet<[CreateSegmentGroupReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';
  import {createSegmentGroup} from './create-segment-group.svelte.js';

  let {asChild, children, ...props}: SegmentGroupProps = $props();

  let [segmentGroupProps, otherProps] = $derived(
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

  let segmentGroup = createSegmentGroup(segmentGroupProps);

  let mergedProps = $derived(
    mergeProps(otherProps, segmentGroup.getRootProps(), parts.root.attrs),
  );

  segmentGroupContext.set(segmentGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, segmentGroup)}
{:else}
  <div {...mergedProps}>
    {@render children?.(segmentGroup)}
  </div>
{/if}
