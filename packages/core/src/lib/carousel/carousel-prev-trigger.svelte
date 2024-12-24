<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface CarouselPrevTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getCarouselContext} from './carousel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselPrevTriggerProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(mergeProps(carousel.getPrevTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
