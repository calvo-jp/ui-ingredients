<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipPositionerProps = $props();

  let tooltip = getTooltipContext();

  let mergedProps = $derived(mergeProps(props, tooltip.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
