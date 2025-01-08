import {createContext} from '../create-context.svelte.js';
import type {CreateDialogReturn} from './create-dialog.svelte.js';

export const [getDialogContext, setDialogContext] =
  createContext<CreateDialogReturn>('Dialog');
