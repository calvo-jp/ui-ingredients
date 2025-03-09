import * as angleSlider from '@zag-js/angle-slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateAngleSliderProps
  extends Omit<angleSlider.Props, 'dir' | 'getRootNode'> {}

export interface CreateAngleSliderReturn extends angleSlider.Api {}

export function createAngleSlider(
  props: CreateAngleSliderProps,
): CreateAngleSliderReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(angleSlider.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => angleSlider.connect(service, normalizeProps));
}
