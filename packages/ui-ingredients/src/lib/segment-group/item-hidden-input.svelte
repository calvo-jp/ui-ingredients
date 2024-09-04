<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSegmentGroupContext,
    getSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {asChild, ...props}: SegmentGroupItemHiddenInputProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let itemProps = getSegmentGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, segmentGroup.getItemHiddenInputProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
