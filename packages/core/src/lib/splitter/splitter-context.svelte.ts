import {createContext} from '$lib/create-context.svelte.js';
import type {CreateSplitterReturn} from './create-splitter.svelte.js';

export const [getSplitterContext, setSplitterContext] =
  createContext<CreateSplitterReturn>('Splitter');
