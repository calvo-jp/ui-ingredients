<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TooltipArrowTipProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipArrowTipProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
