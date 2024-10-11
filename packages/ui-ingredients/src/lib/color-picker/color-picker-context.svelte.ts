import {createContext} from '$lib/create-context.svelte.js';
import type {
  AreaProps,
  ChannelProps,
  ColorFormat,
  SwatchProps,
} from '@zag-js/color-picker';
import type {CreateColorPickerReturn} from './create-color-picker.svelte.js';

export const [getColorPickerContext, setColorPickerContext] =
  createContext<CreateColorPickerReturn>('ColorPicker');

export const [getColorPickerAreaPropsContext, setColorPickerAreaPropsContext] =
  createContext<AreaProps>('ColorPickerArea [PROPS]');

export const [
  getColorPickerSwatchPropsContext,
  setColorPickerSwatchPropsContext,
] = createContext<SwatchProps>('ColorPickerSwatch [PROPS]');

export const [
  getColorPickerFormatPropsContext,
  setColorPickerFormatPropsContext,
] = createContext<{format: ColorFormat}>('ColorPickerFormat [PROPS]', false);

export const [
  getColorPickerChannelPropsContext,
  setColorPickerChannelPropsContext,
] = createContext<ChannelProps>('ColorPickerChannel [PROPS]');
