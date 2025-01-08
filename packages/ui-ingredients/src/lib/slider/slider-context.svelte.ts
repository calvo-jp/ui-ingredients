import type {ThumbProps} from '@zag-js/slider';
import {createContext} from '../create-context.svelte.js';
import type {CreateSliderReturn} from './create-slider.svelte.js';

export const [getSliderContext, setSliderContext] =
  createContext<CreateSliderReturn>('Slider');

export const [getSliderThumbPropsContext, setSliderThumbPropsContext] =
  createContext<ThumbProps>('SliderThumb [PROPS]');
