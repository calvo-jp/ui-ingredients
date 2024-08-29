<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SegmentGroupIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupIndicatorProps = $props();

  let segmentGroup = segmentGroupContext.get();

  let mergedProps = $derived(
    mergeProps(props, segmentGroup.getIndicatorProps(), parts.indicator.attrs),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
