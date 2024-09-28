<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
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
  }: SegmentGroupItemControlProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let itemProps = getSegmentGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(
      segmentGroup.getItemControlProps(itemProps),
      parts.itemControl.attrs,
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
