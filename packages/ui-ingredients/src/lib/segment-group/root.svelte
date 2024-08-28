<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSegmentGroupProps,
    CreateSegmentGroupReturn,
  } from './create-segment-group.svelte.js';

  export interface SegmentGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSegmentGroupProps> {
    asChild?: Snippet<
      [attrs: Omit<GenericHtmlProps, 'children'>, segmentGroup: CreateSegmentGroupReturn]
    >;
    children?: Snippet<[segmentGroup: CreateSegmentGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';
  import {createSegmentGroup} from './create-segment-group.svelte.js';

  let {
    id,
    ids,
    form,
    name,
    value,
    disabled,
    readOnly,
    orientation,
    onValueChange,
    asChild,
    children,
    ...props
  }: SegmentGroupProps = $props();

  let segmentGroup = createSegmentGroup({
    id,
    ids,
    form,
    name,
    value: $state.snapshot(value),
    disabled,
    readOnly,
    orientation,
    onValueChange,
  });

  let attrs = $derived(mergeProps(props, segmentGroup.getRootProps(), parts.root.attrs));

  segmentGroupContext.set(segmentGroup);
</script>

{#if asChild}
  {@render asChild(attrs, segmentGroup)}
{:else}
  <div {...attrs}>
    {@render children?.(segmentGroup)}
  </div>
{/if}
