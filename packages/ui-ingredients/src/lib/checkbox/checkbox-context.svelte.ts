import {createContext} from '$lib/create-context.svelte.js';
import type {CreateCheckboxReturn} from './create-checkbox.svelte.js';

export const [getCheckboxContext, setCheckboxContext] =
  createContext<CreateCheckboxReturn>('Checkbox');
