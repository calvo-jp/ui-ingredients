import {createContext} from '../create-context.svelte.js';
import type {CreateEditableReturn} from './create-editable.svelte.js';

export const [getEditableContext, setEditableContext] =
  createContext<CreateEditableReturn>('Editable');
