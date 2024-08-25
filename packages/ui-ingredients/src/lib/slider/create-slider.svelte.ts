import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as slider from '@zag-js/slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSliderProps extends Omit<slider.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSliderReturn extends slider.Api {}

export function createSlider(props: CreateSliderProps): CreateSliderReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    slider.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => slider.connect(state, send, normalizeProps)));

  return api;
}
