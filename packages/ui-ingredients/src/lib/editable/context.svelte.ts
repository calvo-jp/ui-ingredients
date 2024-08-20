import * as editable from '@zag-js/editable';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateEditableContextProps extends editable.Context {}
export interface CreateEditableContextReturn
  extends ReturnType<typeof createEditableContext> {}

export function createEditableContext(props: CreateEditableContextProps) {
  const [state, send] = useMachine(editable.machine(props));

  const api = $derived(
    reflect(() => editable.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setEditableContext(value: CreateEditableContextReturn) {
  setContext('Editable', value);
}

export function useEditableContext() {
  return getContext<CreateEditableContextReturn>('Editable');
}
