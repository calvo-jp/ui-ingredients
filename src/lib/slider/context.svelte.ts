import * as slider from '@zag-js/slider';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateSliderContextProps extends slider.Context {}
export interface CreateSliderContextReturn extends ReturnType<typeof createSliderContext> {}

export function createSliderContext(props: CreateSliderContextProps) {
  const [state, send] = useMachine(slider.machine(props));

  const api = $derived(reflect(() => slider.connect(state, send, normalizeProps)));

  return api;
}

export function setSliderContext(value: CreateSliderContextReturn) {
  setContext('Slider', value);
}

export function useSliderContext() {
  return getContext<CreateSliderContextReturn>('Slider');
}

export function setSliderThumbContext(value: slider.ThumbProps) {
  setContext(
    'SliderThumb',
    reflect(() => value),
  );
}

export function useSliderThumbContext() {
  return getContext<slider.ThumbProps>('SliderThumb');
}
