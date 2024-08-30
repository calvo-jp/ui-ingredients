import {Context} from '$lib/utils.svelte.js';
import type {
  AreaProps,
  ChannelProps,
  ChannelSliderProps,
  SwatchProps,
} from '@zag-js/color-picker';
import type {CreateColorPickerReturn} from './create-color-picker.svelte.js';

export const colorPickerContext = new Context<CreateColorPickerReturn>(
  'ColorPicker',
);
export const colorPickerAreaPropsContext = new Context<AreaProps>(
  'ColorPickerArea',
);
export const colorPickerSwatchPropsContext = new Context<SwatchProps>(
  'ColorPickerSwatch',
);
export const colorPickerChannelPropsContext = new Context<ChannelProps>(
  'ColorPickerChannel',
);
export const colorPickerChannelSliderPropsContext =
  new Context<ChannelSliderProps>('ColorPickerChannelSlider');
