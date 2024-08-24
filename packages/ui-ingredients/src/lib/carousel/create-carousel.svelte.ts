import * as carousel from '@zag-js/carousel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateCarouselProps extends carousel.Context {}
export interface CreateCarouselReturn extends carousel.Api {}

export function createCarousel(props: CreateCarouselProps): CreateCarouselReturn {
  const [state, send] = useMachine(carousel.machine(props));

  const api = $derived(reflect(() => carousel.connect(state, send, normalizeProps)));

  return api;
}
