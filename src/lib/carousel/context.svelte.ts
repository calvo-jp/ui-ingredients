import * as carousel from '@zag-js/carousel';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateCarouselContextProps extends carousel.Context {}
export interface CreateCarouselContextReturn extends ReturnType<typeof createCarouselContext> {}

export function createCarouselContext(props: CreateCarouselContextProps) {
  const [state, send] = useMachine(carousel.machine(props));
  const api = $derived(carousel.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setCarouselContext(value: CreateCarouselContextReturn) {
  setContext('Carousel', value);
}

export function useCarouselContext() {
  return getContext<CreateCarouselContextReturn>('Carousel');
}
