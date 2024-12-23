<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateCarouselProps,
    CreateCarouselReturn,
  } from './create-carousel.svelte.js';

  export interface CarouselProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateCarouselReturn>,
      CreateCarouselProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {setCarouselContext} from './carousel-context.svelte.js';
  import {createCarousel} from './create-carousel.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselProps = $props();

  let [createCarouselProps, localProps] = $derived(
    createSplitProps<CreateCarouselProps>([
      'id',
      'ids',
      'loop',
      'align',
      'index',
      'spacing',
      'orientation',
      'slidesPerView',
      'onIndexChange',
    ])(props),
  );

  let carousel = createCarousel(reflect(() => createCarouselProps));

  let mergedProps = $derived(mergeProps(carousel.getRootProps(), localProps));

  setCarouselContext(carousel);
</script>

{#if asChild}
  {@render asChild(mergedProps, carousel)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(carousel)}
  </div>
{/if}
