import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateStepsContextProps extends steps.Context {}
export interface CreateStepsContextReturn extends ReturnType<typeof createStepsContext> {}

export function createStepsContext(props: CreateStepsContextProps) {
  const [state, send] = useMachine(steps.machine(props));

  const api = $derived(reflect(() => steps.connect(state, send, normalizeProps)));

  return api;
}

export function setStepsContext(value: CreateStepsContextReturn) {
  setContext('Steps', value);
}

export function useStepsContext() {
  return getContext<CreateStepsContextReturn>('Steps');
}

export function setStepsItemContext(value: steps.ItemProps) {
  setContext('StepsItem', value);
}

export function useStepsItemContext() {
  return getContext<steps.ItemProps>('StepsItem');
}
