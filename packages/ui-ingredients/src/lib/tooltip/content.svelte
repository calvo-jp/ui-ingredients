<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TooltipContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipContentProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getContentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
