import {createContext} from '$lib/create-context.svelte.js';
import type {CreatePinInputReturn} from './create-pin-input.svelte.js';

export const [getPinInputContext, setPinInputContext] =
  createContext<CreatePinInputReturn>('PinInput');
