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
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';
  import {createCarousel} from './create-carousel.svelte.js';

  let {asChild, children, ...props}: CarouselProps = $props();

  let [carouselProps, otherProps] = createSplitProps<CreateCarouselProps>([
    'id',
    'ids',
    'loop',
    'align',
    'index',
    'spacing',
    'orientation',
    'slidesPerView',
    'onIndexChange',
  ])(props);

  let carousel = createCarousel(carouselProps);

  let mergedProps = $derived(mergeProps(otherProps, carousel.getRootProps()));

  carouselContext.set(carousel);
</script>

{#if asChild}
  {@render asChild(mergedProps, carousel)}
{:else}
  <div {...mergedProps}>
    {@render children?.(carousel)}
  </div>
{/if}
