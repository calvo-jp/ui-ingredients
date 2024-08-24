<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCarouselProps, CreateCarouselReturn} from './create-carousel.svelte.js';

  export interface CarouselProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateCarouselProps> {
    children?: Snippet<[api: CreateCarouselReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';
  import {createCarousel} from './create-carousel.svelte.js';

  let {
    id,
    ids,
    loop,
    align,
    index,
    spacing,
    orientation,
    slidesPerView,
    onIndexChange,
    children,
    ...props
  }: CarouselProps = $props();

  let context = createCarousel({
    id,
    ids,
    loop,
    align,
    index: $state.snapshot(index),
    spacing,
    orientation,
    slidesPerView,
    onIndexChange,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  carouselContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
