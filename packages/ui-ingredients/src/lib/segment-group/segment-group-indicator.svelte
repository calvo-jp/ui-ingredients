<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SegmentGroupIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSegmentGroupContext} from './segment-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SegmentGroupIndicatorProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let mergedProps = $derived(
    mergeProps(segmentGroup.getIndicatorProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
