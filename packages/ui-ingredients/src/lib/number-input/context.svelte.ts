import * as numberInput from '@zag-js/number-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateNumberInputContextProps extends numberInput.Context {}
export interface CreateNumberInputContextReturn
  extends ReturnType<typeof createNumberInputContext> {}

export function createNumberInputContext(props: CreateNumberInputContextProps) {
  const [state, send] = useMachine(numberInput.machine(props));

  const api = $derived(
    reflect(() => numberInput.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setNumberInputContext(value: CreateNumberInputContextReturn) {
  setContext('NumberInput', value);
}

export function useNumberInputContext() {
  return getContext<CreateNumberInputContextReturn>('NumberInput');
}
