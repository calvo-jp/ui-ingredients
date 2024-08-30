import {Context} from '$lib/context.svelte.js';
import type {CreateCarouselReturn} from './create-carousel.svelte.js';

export const carouselContext = new Context<CreateCarouselReturn>('Carousel');
