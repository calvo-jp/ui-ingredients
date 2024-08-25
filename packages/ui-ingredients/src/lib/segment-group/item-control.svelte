<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SegmentGroupItemControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupItemControlProps = $props();

  let segmentGroup = segmentGroupContext.get();
  let itemProps = segmentGroupItemPropsContext.get();

  let attrs = $derived(
    mergeProps(props, segmentGroup.getItemControlProps(itemProps), parts.itemControl.attrs),
  );
</script>

<div {...ensureStyleIsString(attrs)}>
  {@render children?.()}
</div>
