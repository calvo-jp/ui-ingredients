<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourArrowProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourArrowProps = $props();

  let tour = getTourContext();
  let mergedProps = $derived(mergeProps(tour.getArrowProps(), props));
</script>

{#if tour.step?.arrow}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <span bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </span>
  {/if}
{/if}
