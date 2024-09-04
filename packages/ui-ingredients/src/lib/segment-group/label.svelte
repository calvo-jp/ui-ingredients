<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {getSegmentGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupLabelProps = $props();

  let segmentGroup = getSegmentGroupContext();

  let mergedProps = $derived(
    mergeProps(props, segmentGroup.getLabelProps(), parts.label.attrs),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
