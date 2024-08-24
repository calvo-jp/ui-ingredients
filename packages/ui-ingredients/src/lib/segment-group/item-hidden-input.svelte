<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemHiddenInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {...props}: SegmentGroupItemHiddenInputProps = $props();

  let context = segmentGroupContext.get();

  let itemProps = segmentGroupItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemHiddenInputProps(itemProps)));
</script>

<input {...attrs} />
