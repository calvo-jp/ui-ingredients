<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourArrowTipProps = $props();

  let tour = getTourContext();
  let mergedProps = $derived(mergeProps(tour.getArrowTipProps(), props));
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
