import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateDialogProps extends dialog.Context {}
export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: CreateDialogProps): CreateDialogReturn {
  const [state, send] = useMachine(dialog.machine(props));

  const api = $derived(reflect(() => dialog.connect(state, send, normalizeProps)));

  return api;
}
