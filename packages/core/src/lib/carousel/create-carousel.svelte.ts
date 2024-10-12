import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as carousel from '@zag-js/carousel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateCarouselProps
  extends Omit<carousel.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateCarouselReturn extends carousel.Api {}

export function createCarousel(
  props: CreateCarouselProps,
): CreateCarouselReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: carousel.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(carousel.machine(context), {context});

  return reflect(() => carousel.connect(state, send, normalizeProps));
}
