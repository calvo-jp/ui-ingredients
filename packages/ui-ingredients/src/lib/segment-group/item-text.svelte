<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupItemTextProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useSegmentGroupContext,
    useSegmentGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: SegmentGroupItemTextProps = $props();

  let context = useSegmentGroupContext();

  let itemProps = useSegmentGroupItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
