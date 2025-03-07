import * as slider from '@zag-js/slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateSliderProps
  extends Omit<slider.Props, 'dir' | 'getRootNode'> {}

export interface CreateSliderReturn extends slider.Api {}

export function createSlider(props: CreateSliderProps): CreateSliderReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(slider.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => slider.connect(service, normalizeProps));
}
