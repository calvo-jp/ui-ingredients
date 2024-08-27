import {Context} from '$lib/utils.svelte.js';
import type {CreateTimePickerReturn} from './create-time-picker.svelte.js';

export const timePickerContext = new Context<CreateTimePickerReturn>('TimePicker');