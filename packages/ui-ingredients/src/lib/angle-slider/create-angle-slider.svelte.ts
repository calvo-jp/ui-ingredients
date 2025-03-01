import * as angleSlider from '@zag-js/angle-slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateAngleSliderProps
  extends Omit<angleSlider.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateAngleSliderReturn extends angleSlider.Api {}

export function createAngleSlider(
  props: CreateAngleSliderProps,
): CreateAngleSliderReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: angleSlider.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(angleSlider.machine(context), {context});

  return reflect(() => angleSlider.connect(state, send, normalizeProps));
}
