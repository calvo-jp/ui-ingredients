<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SegmentGroupIndicatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupIndicatorProps = $props();

  let segmentGroup = segmentGroupContext.get();

  let attrs = $derived(mergeProps(props, segmentGroup.getIndicatorProps(), parts.indicator.attrs));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
