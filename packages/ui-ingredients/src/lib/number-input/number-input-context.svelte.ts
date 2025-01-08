import {createContext} from '../create-context.svelte.js';
import type {CreateNumberInputReturn} from './create-number-input.svelte.js';

export const [getNumberInputContext, setNumberInputContext] =
  createContext<CreateNumberInputReturn>('NumberInput');
