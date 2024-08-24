import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateClipboardProps extends clipboard.Context {}
export interface CreateClipboardReturn extends clipboard.Api {}

export function createClipboard(props: CreateClipboardProps): CreateClipboardReturn {
  const [state, send] = useMachine(clipboard.machine(props));

  const api = $derived(reflect(() => clipboard.connect(state, send, normalizeProps)));

  return api;
}
