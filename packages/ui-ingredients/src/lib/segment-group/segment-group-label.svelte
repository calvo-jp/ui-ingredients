<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {getSegmentGroupContext} from './segment-group-context.svelte.js';

  let {this: e, asChild, children, ...props}: SegmentGroupLabelProps = $props();

  let segmentGroup = getSegmentGroupContext();

  let mergedProps = $derived(
    mergeProps(props, segmentGroup.getLabelProps(), parts.label.attrs),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
