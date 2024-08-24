import * as numberInput from '@zag-js/number-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateNumberInputProps extends numberInput.Context {}
export interface CreateNumberInputReturn extends numberInput.Api {}

export function createNumberInput(props: CreateNumberInputProps): CreateNumberInputReturn {
  const [state, send] = useMachine(numberInput.machine(props));

  const api = $derived(reflect(() => numberInput.connect(state, send, normalizeProps)));

  return api;
}
