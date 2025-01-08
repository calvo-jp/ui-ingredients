<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface HoverCardArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getHoverCardContext} from './hover-card-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: HoverCardArrowTipProps = $props();

  let hoverCard = getHoverCardContext();
  let mergedProps = $derived(mergeProps(hoverCard.getArrowTipProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
