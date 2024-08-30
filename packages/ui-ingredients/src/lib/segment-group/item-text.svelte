<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SegmentGroupItemTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {
    segmentGroupContext,
    segmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupItemTextProps = $props();

  let segmentGroup = segmentGroupContext.get();
  let itemProps = segmentGroupItemPropsContext.get();

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
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
