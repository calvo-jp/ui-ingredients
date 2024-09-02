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
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {parts} from './anatomy.js';
  import {setSegmentGroupContext} from './context.svelte.js';
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

  let segmentGroup = createSegmentGroup(reflect(() => segmentGroupProps));

  let mergedProps = $derived(
    mergeProps(otherProps, segmentGroup.getRootProps(), parts.root.attrs),
  );

  setSegmentGroupContext(segmentGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, segmentGroup)}
{:else}
  <div {...mergedProps}>
    {@render children?.(segmentGroup)}
  </div>
{/if}
