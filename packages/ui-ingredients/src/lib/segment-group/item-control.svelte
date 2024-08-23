<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemControlProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {
    useSegmentGroupContext,
    useSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: SegmentGroupItemControlProps = $props();

  let context = useSegmentGroupContext();

  let itemProps = useSegmentGroupItemPropsContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemControlProps(itemProps),
      parts.itemControl.attrs,
    ),
  );
</script>

<div {...ensureStyleIsString(attrs)}>
  {@render children?.()}
</div>
