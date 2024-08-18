import {normalizeProps, reflect, useActor} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';
import {getContext, setContext} from 'svelte';

export interface CreateToastContextProps extends toast.Service {}
export interface CreateToastContextReturn extends ReturnType<typeof createToastContext> {}

export function createToastContext(props: CreateToastContextProps) {
  const [state, send] = useActor(props);

  const api = $derived(reflect(() => toast.connect(state, send, normalizeProps)));

  return api;
}

export function setToastContext(value: CreateToastContextReturn) {
  setContext('Toast', value);
}

export function useToastContext() {
  return getContext<CreateToastContextReturn>('Toast');
}
