import {createContext} from '../create-context.svelte.js';
import type {CreateAngleSliderReturn} from './create-angle-slider.svelte.js';

export const [getAngleSliderContext, setAngleSliderContext] =
  createContext<CreateAngleSliderReturn>('AngleSlider');
