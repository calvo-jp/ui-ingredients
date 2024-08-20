import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateCollapsibleContextProps extends collapsible.Context {}
export interface CreateCollapsibleContextReturn
  extends ReturnType<typeof createCollapsibleContext> {}

export function createCollapsibleContext(props: CreateCollapsibleContextProps) {
  const [state, send] = useMachine(collapsible.machine(props));

  const api = $derived(
    reflect(() => collapsible.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setCollapsibleContext(value: CreateCollapsibleContextReturn) {
  setContext('Collapsible', value);
}

export function useCollapsibleContext() {
  return getContext<CreateCollapsibleContextReturn>('Collapsible');
}
