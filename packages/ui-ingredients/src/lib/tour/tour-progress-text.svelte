<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourProgressTextProps
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
  }: TourProgressTextProps = $props();

  let tour = getTourContext();
  let mergedProps = $derived(mergeProps(tour.getProgressTextProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {tour.getProgressText()}
    {/if}
  </span>
{/if}
