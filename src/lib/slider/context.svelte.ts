import * as slider from '@zag-js/slider';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateSliderContextProps extends slider.Context {}
export interface CreateSliderContextReturn extends ReturnType<typeof createSliderContext> {}

export function createSliderContext(props: CreateSliderContextProps) {
  const [state, send] = useMachine(slider.machine(props));

  const api = $derived(slider.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setSliderContext(value: CreateSliderContextReturn) {
  setContext('Slider', value);
}

export function useSliderContext() {
  return getContext<CreateSliderContextReturn>('Slider');
}

export function setSliderThumbContext(value: slider.ThumbProps) {
  setContext('SliderThumb', value);
}

export function useSliderThumbContext() {
  return getContext<slider.ThumbProps>('SliderThumb');
}
