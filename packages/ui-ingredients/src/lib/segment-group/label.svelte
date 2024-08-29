<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SegmentGroupLabelProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupLabelProps = $props();

  let segmentGroup = segmentGroupContext.get();

  let attrs = $derived(mergeProps(props, segmentGroup.getLabelProps(), parts.label.attrs));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
