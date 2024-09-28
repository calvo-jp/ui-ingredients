<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSegmentGroupContext,
    getSegmentGroupItemPropsContext,
  } from './segment-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: SegmentGroupItemHiddenInputProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let itemProps = getSegmentGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(segmentGroup.getItemHiddenInputProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
