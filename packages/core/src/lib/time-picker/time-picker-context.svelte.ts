import {createContext} from '../create-context.svelte.js';
import type {CreateTimePickerReturn} from './create-time-picker.svelte.js';

export const [getTimePickerContext, setTimePickerContext] =
  createContext<CreateTimePickerReturn>('TimePicker');
