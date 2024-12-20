export * as Carousel from './carousel.js';

export type {CarouselIndicatorGroupProps} from './carousel-indicator-group.svelte';
export type {CarouselIndicatorProps} from './carousel-indicator.svelte';
export type {CarouselItemGroupProps} from './carousel-item-group.svelte';
export type {CarouselItemProps} from './carousel-item.svelte';
export type {CarouselNextTriggerProps} from './carousel-next-trigger.svelte';
export type {CarouselPrevTriggerProps} from './carousel-prev-trigger.svelte';
export type {CarouselProps} from './carousel-root.svelte';
export type {CarouselViewportProps} from './carousel-viewport.svelte';

export {anatomy as carouselAnatomy} from './carousel-anatomy.js';
export {
  getCarouselContext,
  setCarouselContext,
} from './carousel-context.svelte.js';
export {
  createCarousel,
  type CreateCarouselProps,
  type CreateCarouselReturn,
} from './create-carousel.svelte.js';
