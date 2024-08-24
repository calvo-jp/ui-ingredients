import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateCheckboxProps extends checkbox.Context {}
export interface CreateCheckboxReturn extends checkbox.Api {}

export function createCheckbox(props: CreateCheckboxProps): CreateCheckboxReturn {
  const [state, send] = useMachine(checkbox.machine(props));

  const api = $derived(reflect(() => checkbox.connect(state, send, normalizeProps)));

  return api;
}
