import {createContext} from '../create-context.svelte.js';
import type {CreateCollapsibleReturn} from './create-collapsible.svelte.js';

export const [getCollapsibleContext, setCollapsibleContext] =
  createContext<CreateCollapsibleReturn>('Collapsible');
