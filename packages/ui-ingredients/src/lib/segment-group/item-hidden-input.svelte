<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SegmentGroupItemHiddenInputProps
    extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSegmentGroupContext,
    getSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {...props}: SegmentGroupItemHiddenInputProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let itemProps = getSegmentGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, segmentGroup.getItemHiddenInputProps(itemProps)),
  );
</script>

<input {...mergedProps} />
