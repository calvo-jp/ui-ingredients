<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipArrowTipProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipArrowTipProps = $props();

  let tooltip = getTooltipContext();

  let mergedProps = $derived(mergeProps(props, tooltip.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
