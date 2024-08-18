import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateClipboardContextProps extends clipboard.Context {}
export interface CreateClipboardContextReturn extends ReturnType<typeof createClipboardContext> {}

export function createClipboardContext(props: CreateClipboardContextProps) {
  const [state, send] = useMachine(clipboard.machine(props));

  const api = $derived(clipboard.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setClipboardContext(value: CreateClipboardContextReturn) {
  setContext('Clipboard', value);
}

export function useClipboardContext() {
  return getContext<CreateClipboardContextReturn>('Clipboard');
}
