import * as slider from '@zag-js/slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateSliderProps
  extends Omit<slider.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateSliderReturn extends slider.Api {}

export function createSlider(props: CreateSliderProps): CreateSliderReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: slider.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(slider.machine, context);

  return reflect(() => slider.connect(service, normalizeProps));
}
