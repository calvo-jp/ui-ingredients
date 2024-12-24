<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourSpotlightProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourSpotlightProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(tour.getSpotlightProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
