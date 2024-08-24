import * as editable from '@zag-js/editable';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateEditableProps extends editable.Context {}
export interface CreateEditableReturn extends editable.Api {}

export function createEditable(props: CreateEditableProps): CreateEditableReturn {
  const [state, send] = useMachine(editable.machine(props));

  const api = $derived(reflect(() => editable.connect(state, send, normalizeProps)));

  return api;
}
