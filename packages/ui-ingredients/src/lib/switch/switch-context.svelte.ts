import {createContext} from '../create-context.svelte.js';
import type {CreateSwitchReturn} from './create-switch.svelte.js';

export const [getSwitchContext, setSwitchContext] =
  createContext<CreateSwitchReturn>('Switch');
