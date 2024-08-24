<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupItemTextProps = $props();

  let context = segmentGroupContext.get();

  let itemProps = segmentGroupItemPropsContext.get();

  let attrs = $derived(
    mergeProps(props, context.getItemTextProps(itemProps), parts.itemText.attrs),
  );
</script>

<span {...ensureStyleIsString(attrs)}>
  {@render children?.()}
</span>
