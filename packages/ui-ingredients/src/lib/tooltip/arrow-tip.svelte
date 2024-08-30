<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TooltipArrowTipProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipArrowTipProps = $props();

  let tooltip = tooltipContext.get();

  let mergedProps = $derived(mergeProps(props, tooltip.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
