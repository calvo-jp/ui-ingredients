<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TooltipArrowProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipArrowProps = $props();

  let tooltip = tooltipContext.get();

  let mergedProps = $derived(mergeProps(props, tooltip.getArrowProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
