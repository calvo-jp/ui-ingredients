<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TooltipPositionerProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipPositionerProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
