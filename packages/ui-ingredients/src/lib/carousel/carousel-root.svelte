<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateCarouselProps,
    CreateCarouselReturn,
  } from './create-carousel.svelte.js';

  export interface CarouselProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateCarouselReturn>,
      Optional<CreateCarouselProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setCarouselContext} from './carousel-context.svelte.js';
  import {createCarousel} from './create-carousel.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselProps = $props();

  let uid = $props.id();

  let [createCarouselProps, localProps] = $derived(
    createSplitProps<Omit<CreateCarouselProps, 'id'>>([
      'allowMouseDrag',
      'autoplay',
      'defaultPage',
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

  let carousel = createCarousel(
    reflect(() => ({...createCarouselProps, id: id ?? uid})),
  );

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
