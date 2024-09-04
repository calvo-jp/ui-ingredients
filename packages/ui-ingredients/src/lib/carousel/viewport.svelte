<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface CarouselViewportProps extends IngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCarouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselViewportProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(mergeProps(props, carousel.getViewportProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
