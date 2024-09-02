import {createContext} from '$lib/create-context.svelte.js';
import type {CreateProgressReturn} from './create-progress.svelte.js';

export const [getProgressContext, setProgressContext] =
  createContext<CreateProgressReturn>('Progress');
