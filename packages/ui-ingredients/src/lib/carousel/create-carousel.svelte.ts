import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as carousel from '@zag-js/carousel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateCarouselProps
  extends Omit<carousel.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateCarouselReturn extends carousel.Api {}

export function createCarousel(
  props: CreateCarouselProps,
): CreateCarouselReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    carousel.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => carousel.connect(state, send, normalizeProps)),
  );

  return api;
}
