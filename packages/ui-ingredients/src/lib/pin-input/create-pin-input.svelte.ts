import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePinInputProps extends pinInput.Context {}
export interface CreatePinInputReturn extends pinInput.Api {}

export function createPinInputContext(props: CreatePinInputProps): CreatePinInputReturn {
  const [state, send] = useMachine(pinInput.machine(props));

  const api = $derived(reflect(() => pinInput.connect(state, send, normalizeProps)));

  return api;
}
