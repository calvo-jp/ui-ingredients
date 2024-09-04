<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface CarouselPrevTriggerProps extends IngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCarouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselPrevTriggerProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(mergeProps(props, carousel.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
