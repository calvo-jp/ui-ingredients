<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TooltipArrowProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getTooltipContext} from './tooltip-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TooltipArrowProps = $props();

  let tooltip = getTooltipContext();
  let mergedProps = $derived(mergeProps(tooltip.getArrowProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
