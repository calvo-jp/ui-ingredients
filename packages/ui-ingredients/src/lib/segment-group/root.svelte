<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSegmentGroupProps,
    CreateSegmentGroupReturn,
  } from './create-segment-group.svelte.js';

  export interface SegmentGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSegmentGroupProps> {
    children?: Snippet<[api: CreateSegmentGroupReturn]>;
  }
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
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
    children,
    ...props
  }: SegmentGroupProps = $props();

  let context = createSegmentGroup({
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

  let attrs = $derived(mergeProps(props, context.getRootProps(), parts.root.attrs));

  segmentGroupContext.set(context);
</script>

<div {...ensureStyleIsString(attrs)}>
  {@render children?.(context)}
</div>
