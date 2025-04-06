import type {
  AreaProps,
  ChannelProps,
  ColorFormat,
  SwatchProps,
} from '@zag-js/color-picker';
import {createContext} from '../create-context.svelte.js';
import type {CreateColorPickerReturn} from './create-color-picker.svelte.js';

export const [getColorPickerContext, setColorPickerContext] =
  createContext<CreateColorPickerReturn>('ColorPicker');

export const [getColorPickerAreaPropsContext, setColorPickerAreaPropsContext] =
  createContext<AreaProps>('ColorPickerArea.props');

export const [
  getColorPickerSwatchPropsContext,
  setColorPickerSwatchPropsContext,
] = createContext<SwatchProps>('ColorPickerSwatch.props');

export const [
  getColorPickerFormatPropsContext,
  setColorPickerFormatPropsContext,
] = createContext<{format: ColorFormat}>('ColorPickerFormat.props', false);

export const [
  getColorPickerChannelPropsContext,
  setColorPickerChannelPropsContext,
] = createContext<ChannelProps>('ColorPickerChannel.props');
