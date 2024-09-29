<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourProgressPercentProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourProgressPercentProps = $props();

  let tour = getTourContext();
</script>

{#if asChild}
  {@render asChild(props)}
{:else}
  <span bind:this={ref} {...props}>
    {#if children}
      {@render children?.()}
    {:else}
      {tour.getProgressPercent()}%
    {/if}
  </span>
{/if}
