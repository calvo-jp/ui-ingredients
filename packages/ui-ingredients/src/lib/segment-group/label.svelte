<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupLabelProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: SegmentGroupLabelProps = $props();

  let segmentGroup = segmentGroupContext.get();

  let attrs = $derived(mergeProps(props, segmentGroup.getLabelProps(), parts.label.attrs));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
