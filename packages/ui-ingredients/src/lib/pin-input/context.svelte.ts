import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreatePinInputContextProps extends pinInput.Context {}
export interface CreatePinInputContextReturn
  extends ReturnType<typeof createPinInputContext> {}

export function createPinInputContext(props: CreatePinInputContextProps) {
  const [state, send] = useMachine(pinInput.machine(props));

  const api = $derived(
    reflect(() => pinInput.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setPinInputContext(value: CreatePinInputContextReturn) {
  setContext('PinInput', value);
}

export function usePinInputContext() {
  return getContext<CreatePinInputContextReturn>('PinInput');
}
