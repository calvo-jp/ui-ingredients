import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateRadioGroupProps extends radioGroup.Context {}
export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(props: CreateRadioGroupProps): CreateRadioGroupReturn {
  const [state, send] = useMachine(radioGroup.machine(props));

  const api = $derived(reflect(() => radioGroup.connect(state, send, normalizeProps)));

  return api;
}
