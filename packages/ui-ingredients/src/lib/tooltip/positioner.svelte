<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TooltipPositionerProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipPositionerProps = $props();

  let tooltip = tooltipContext.get();

  let mergedProps = $derived(mergeProps(props, tooltip.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
