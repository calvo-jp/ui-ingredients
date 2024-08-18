import * as dialog from '@zag-js/dialog';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateDialogContextProps extends dialog.Context {}
export interface CreateDialogContextReturn extends ReturnType<typeof createDialogContext> {}

export function createDialogContext(props: CreateDialogContextProps) {
  const [state, send] = useMachine(dialog.machine(props));

  const api = $derived(dialog.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setDialogContext(value: CreateDialogContextReturn) {
  setContext('Dialog', value);
}

export function useDialogContext() {
  return getContext<CreateDialogContextReturn>('Dialog');
}
