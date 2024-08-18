import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as switch$ from '@zag-js/switch';
import {getContext, setContext} from 'svelte';

export interface CreateSwitchContextProps extends switch$.Context {}
export interface CreateSwitchContextReturn extends ReturnType<typeof createSwitchContext> {}

export function createSwitchContext(props: CreateSwitchContextProps) {
  const [state, send] = useMachine(switch$.machine(props));

  const api = $derived(switch$.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setSwitchContext(value: CreateSwitchContextReturn) {
  setContext('Switch', value);
}

export function useSwitchContext() {
  return getContext<CreateSwitchContextReturn>('Switch');
}
