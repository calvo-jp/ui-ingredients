import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as slider from '@zag-js/slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateSliderProps
  extends Omit<slider.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSliderReturn extends slider.Api {}

export function createSlider(props: CreateSliderProps): CreateSliderReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: slider.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(slider.machine(context), {context});

  return reflect(() => slider.connect(state, send, normalizeProps));
}
