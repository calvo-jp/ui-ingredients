<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface CarouselIndicatorGroupProps extends IngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCarouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselIndicatorGroupProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(
    mergeProps(props, carousel.getIndicatorGroupProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
