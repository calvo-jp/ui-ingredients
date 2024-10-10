import {createContext} from '$lib/create-context.svelte.js';
import type {CreateAlertDialogReturn} from './create-alert-dialog.svelte.js';

export const [getAlertDialogContext, setAlertDialogContext] =
  createContext<CreateAlertDialogReturn>('AlertDialog');
