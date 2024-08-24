<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SegmentGroupIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupIndicatorProps = $props();

  let context = segmentGroupContext.get();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps(), parts.indicator.attrs));
</script>

<span {...ensureStyleIsString(attrs)}>
  {@render children?.()}
</span>
