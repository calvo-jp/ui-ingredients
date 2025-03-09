import * as carousel from '@zag-js/carousel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateCarouselProps
  extends Omit<carousel.Props, 'dir' | 'getRootNode'> {}

export interface CreateCarouselReturn extends carousel.Api {}

export function createCarousel(
  props: CreateCarouselProps,
): CreateCarouselReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(carousel.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => carousel.connect(service, normalizeProps));
}
