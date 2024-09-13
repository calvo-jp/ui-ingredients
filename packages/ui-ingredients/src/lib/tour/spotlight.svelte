<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourSpotlightProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TourSpotlightProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getSpotlightProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
