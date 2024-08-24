import * as slider from '@zag-js/slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSliderProps extends slider.Context {}
export interface CreateSliderReturn extends slider.Api {}

export function createSlider(props: CreateSliderProps): CreateSliderReturn {
  const [state, send] = useMachine(slider.machine(props));

  const api = $derived(reflect(() => slider.connect(state, send, normalizeProps)));

  return api;
}
