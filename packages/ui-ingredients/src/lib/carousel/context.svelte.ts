import * as carousel from '@zag-js/carousel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateCarouselContextProps extends carousel.Context {}
export interface CreateCarouselContextReturn
  extends ReturnType<typeof createCarouselContext> {}

export function createCarouselContext(props: CreateCarouselContextProps) {
  const [state, send] = useMachine(carousel.machine(props));

  const api = $derived(
    reflect(() => carousel.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setCarouselContext(value: CreateCarouselContextReturn) {
  setContext('Carousel', value);
}

export function useCarouselContext() {
  return getContext<CreateCarouselContextReturn>('Carousel');
}
