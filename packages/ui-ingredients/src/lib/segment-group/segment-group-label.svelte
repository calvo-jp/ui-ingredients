<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './segment-group-anatomy.js';
  import {getSegmentGroupContext} from './segment-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SegmentGroupLabelProps = $props();

  let segmentGroup = getSegmentGroupContext();

  let mergedProps = $derived(
    mergeProps(segmentGroup.getLabelProps(), parts.label.attrs, props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
