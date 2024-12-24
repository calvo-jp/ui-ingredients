import {createContext} from '../create-context.svelte.js';
import type {CreateSplitterReturn} from './create-splitter.svelte.js';

export const [getSplitterContext, setSplitterContext] =
  createContext<CreateSplitterReturn>('Splitter');
