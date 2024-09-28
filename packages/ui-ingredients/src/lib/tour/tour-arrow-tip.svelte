<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
