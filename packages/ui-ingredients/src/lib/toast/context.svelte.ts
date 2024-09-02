import {createContext} from '$lib/create-context.svelte.js';
import type {CreateToastReturn} from './create-toast.svelte.js';

export const [getToastContext, setToastContext] =
  createContext<CreateToastReturn>('Toast');
