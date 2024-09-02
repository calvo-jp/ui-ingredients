import {createContext} from '$lib/create-context.svelte.js';
import type {CreateCarouselReturn} from './create-carousel.svelte.js';

export const [getCarouselContext, setCarouselContext] =
  createContext<CreateCarouselReturn>('Carousel');
