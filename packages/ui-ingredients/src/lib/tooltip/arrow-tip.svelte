<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TooltipArrowTipProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipArrowTipProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
