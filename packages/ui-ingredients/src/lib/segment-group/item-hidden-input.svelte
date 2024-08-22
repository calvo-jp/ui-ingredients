<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useSegmentGroupContext,
    useSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {...props}: SegmentGroupItemHiddenInputProps = $props();

  let context = useSegmentGroupContext();

  let itemProps = useSegmentGroupItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemHiddenInputProps(itemProps)),
  );
</script>

<input {...attrs} />
