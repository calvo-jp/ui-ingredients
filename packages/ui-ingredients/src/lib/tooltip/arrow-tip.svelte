<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipArrowTipProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipArrowTipProps = $props();

  let context = tooltipContext.get();

  let attrs = $derived(mergeProps(props, context.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
