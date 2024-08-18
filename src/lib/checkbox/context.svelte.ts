import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateCheckboxContextProps extends checkbox.Context {}
export interface CreateCheckboxContextReturn extends ReturnType<typeof createCheckboxContext> {}

export function createCheckboxContext(props: CreateCheckboxContextProps) {
  const [state, send] = useMachine(checkbox.machine(props));

  const api = $derived(checkbox.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setCheckboxContext(value: CreateCheckboxContextReturn) {
  setContext('Checkbox', value);
}

export function useCheckboxContext() {
  return getContext<CreateCheckboxContextReturn>('Checkbox');
}
