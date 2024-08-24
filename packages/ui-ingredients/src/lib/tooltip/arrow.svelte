<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TooltipArrowProps extends HtmlProps<'div'> {}
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
