<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSegmentGroupContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupIndicatorProps = $props();

  let context = useSegmentGroupContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
