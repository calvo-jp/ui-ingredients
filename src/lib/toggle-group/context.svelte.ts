import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as toggleGroup from '@zag-js/toggle-group';
import {getContext, setContext} from 'svelte';

export interface CreateToggleGroupContextProps extends toggleGroup.Context {}
export interface CreateToggleGroupContextReturn
  extends ReturnType<typeof createToggleGroupContext> {}

export function createToggleGroupContext(props: CreateToggleGroupContextProps) {
  const [state, send] = useMachine(toggleGroup.machine(props));

  const api = $derived(toggleGroup.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setToggleGroupContext(value: CreateToggleGroupContextReturn) {
  setContext('ToggleGroup', value);
}

export function useToggleGroupContext() {
  return getContext<CreateToggleGroupContextReturn>('ToggleGroup');
}
