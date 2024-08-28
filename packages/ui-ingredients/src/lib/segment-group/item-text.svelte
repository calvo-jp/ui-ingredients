<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupItemTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupItemTextProps = $props();

  let segmentGroup = segmentGroupContext.get();
  let itemProps = segmentGroupItemPropsContext.get();

  let attrs = $derived(
    mergeProps(props, segmentGroup.getItemTextProps(itemProps), parts.itemText.attrs),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
