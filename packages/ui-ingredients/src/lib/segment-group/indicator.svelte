<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {getSegmentGroupContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: SegmentGroupIndicatorProps = $props();

  let segmentGroup = getSegmentGroupContext();

  let mergedProps = $derived(
    mergeProps(props, segmentGroup.getIndicatorProps(), parts.indicator.attrs),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
