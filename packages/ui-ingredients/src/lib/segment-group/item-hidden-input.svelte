<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SegmentGroupItemHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {...props}: SegmentGroupItemHiddenInputProps = $props();

  let segmentGroup = segmentGroupContext.get();
  let itemProps = segmentGroupItemPropsContext.get();

  let mergedProps = $derived(mergeProps(props, segmentGroup.getItemHiddenInputProps(itemProps)));
</script>

<input {...mergedProps} />
