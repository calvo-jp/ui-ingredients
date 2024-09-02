import {createContext} from '$lib/create-context.svelte.js';
import type {CreateToggleGroupReturn} from './create-toggle-group.svelte.js';

export const [getToggleGroupContext, setToggleGroupContext] =
  createContext<CreateToggleGroupReturn>('ToggleGroup');
