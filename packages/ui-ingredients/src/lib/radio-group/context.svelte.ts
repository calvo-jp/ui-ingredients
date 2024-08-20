import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateRadioGroupContextProps extends radioGroup.Context {}
export interface CreateRadioGroupContextReturn
  extends ReturnType<typeof createRadioGroupContext> {}

export function createRadioGroupContext(props: CreateRadioGroupContextProps) {
  const [state, send] = useMachine(radioGroup.machine(props));

  const api = $derived(
    reflect(() => radioGroup.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setRadioGroupContext(value: CreateRadioGroupContextReturn) {
  setContext('RadioGroup', value);
}

export function useRadioGroupContext() {
  return getContext<CreateRadioGroupContextReturn>('RadioGroup');
}

export function setRadioGroupItemContext(value: radioGroup.ItemProps) {
  setContext('RadioGroupItem', value);
}

export function useRadioGroupItemContext() {
  return getContext<radioGroup.ItemProps>('RadioGroupItem');
}
