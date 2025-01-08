<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
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
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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
      'allowMouseDrag',
      'autoplay',
      'id',
      'ids',
      'inViewThreshold',
      'loop',
      'onAutoplayStatusChange',
      'onDragStatusChange',
      'onPageChange',
      'orientation',
      'padding',
      'page',
      'slideCount',
      'slidesPerMove',
      'slidesPerPage',
      'snapType',
      'spacing',
      'translations',
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
