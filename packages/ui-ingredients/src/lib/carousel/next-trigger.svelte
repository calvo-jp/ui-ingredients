<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface CarouselNextTriggerProps extends IngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCarouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselNextTriggerProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(mergeProps(props, carousel.getNextTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
