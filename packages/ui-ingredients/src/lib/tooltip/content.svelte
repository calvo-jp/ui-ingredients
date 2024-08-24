<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipContentProps = $props();

  let context = tooltipContext.get();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
