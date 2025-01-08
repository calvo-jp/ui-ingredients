<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourTitleProps = $props();

  let tour = getTourContext();
  let mergedProps = $derived(mergeProps(tour.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {tour.step?.title}
    {/if}
  </h2>
{/if}
