import {createContext} from '../create-context.svelte.js';
import type {CreateToggleReturn} from './create-toggle.svelte.js';

export const [getToggleContext, setToggleContext] =
  createContext<CreateToggleReturn>('Toggle');
