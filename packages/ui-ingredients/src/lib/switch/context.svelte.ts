import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch$ from '@zag-js/switch';
import {getContext, setContext} from 'svelte';

export interface CreateSwitchContextProps extends switch$.Context {}
export interface CreateSwitchContextReturn
  extends ReturnType<typeof createSwitchContext> {}

export function createSwitchContext(props: CreateSwitchContextProps) {
  const [state, send] = useMachine(switch$.machine(props));

  const api = $derived(
    reflect(() => switch$.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setSwitchContext(value: CreateSwitchContextReturn) {
  setContext('Switch', value);
}

export function useSwitchContext() {
  return getContext<CreateSwitchContextReturn>('Switch');
}
