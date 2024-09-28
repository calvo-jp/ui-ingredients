<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './segment-group-anatomy.js';
  import {
    getSegmentGroupContext,
    getSegmentGroupItemPropsContext,
  } from './segment-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SegmentGroupItemTextProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let itemProps = getSegmentGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      segmentGroup.getItemTextProps(itemProps),
      parts.itemText.attrs,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
