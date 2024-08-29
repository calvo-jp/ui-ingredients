<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCarouselProps, CreateCarouselReturn} from './create-carousel.svelte.js';

  export interface CarouselProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateCarouselProps> {
    asChild?: AsChild<CreateCarouselReturn>;
    children?: Snippet<[CreateCarouselReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
    children,
    ...props
  }: CarouselProps = $props();

  let carousel = createCarousel({
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

  let attrs = $derived(mergeProps(props, carousel.getRootProps()));

  carouselContext.set(carousel);
</script>

{#if asChild}
  {@render asChild(attrs, carousel)}
{:else}
  <div {...attrs}>
    {@render children?.(carousel)}
  </div>
{/if}
