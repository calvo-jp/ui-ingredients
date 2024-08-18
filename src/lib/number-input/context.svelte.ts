import * as numberInput from '@zag-js/number-input';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateNumberInputContextProps extends numberInput.Context {}
export interface CreateNumberInputContextReturn
  extends ReturnType<typeof createNumberInputContext> {}

export function createNumberInputContext(props: CreateNumberInputContextProps) {
  const [state, send] = useMachine(numberInput.machine(props));

  const api = $derived(numberInput.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setNumberInputContext(value: CreateNumberInputContextReturn) {
  setContext('NumberInput', value);
}

export function useNumberInputContext() {
  return getContext<CreateNumberInputContextReturn>('NumberInput');
}
