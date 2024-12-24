import {createContext} from '../create-context.svelte.js';
import type {CreateDrawerReturn} from './create-drawer.svelte.js';

export const [getDrawerContext, setDrawerContext] =
  createContext<CreateDrawerReturn>('Drawer');
