import {Context} from '$lib/utils.svelte.js';
import type {ThumbProps} from '@zag-js/slider';
import type {CreateSliderReturn} from './create-slider.svelte.js';

export const sliderContext = new Context<CreateSliderReturn>('Slider');
export const sliderThumbPropsContext = new Context<ThumbProps>('SliderThumb');
