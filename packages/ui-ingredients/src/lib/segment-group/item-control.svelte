<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SegmentGroupItemControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {
    getSegmentGroupContext,
    getSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupItemControlProps = $props();

  let segmentGroup = getSegmentGroupContext();
  let itemProps = getSegmentGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      segmentGroup.getItemControlProps(itemProps),
      parts.itemControl.attrs,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
