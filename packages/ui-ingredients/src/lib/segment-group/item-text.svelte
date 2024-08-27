<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SegmentGroupItemTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupItemTextProps = $props();

  let segmentGroup = segmentGroupContext.get();
  let itemProps = segmentGroupItemPropsContext.get();

  let attrs = $derived(
    mergeProps(props, segmentGroup.getItemTextProps(itemProps), parts.itemText.attrs),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
