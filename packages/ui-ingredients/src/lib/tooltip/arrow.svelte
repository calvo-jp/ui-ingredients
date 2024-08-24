<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipArrowProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipArrowProps = $props();

  let context = tooltipContext.get();

  let attrs = $derived(mergeProps(props, context.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
