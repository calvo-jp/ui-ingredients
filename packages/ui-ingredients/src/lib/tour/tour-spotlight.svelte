<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourSpotlightProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourSpotlightProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getSpotlightProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
