import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';
import {getContext, setContext} from 'svelte';

export interface CreateTimerContextProps extends timer.Context {}
export interface CreateTimerContextReturn
  extends ReturnType<typeof createTimerContext> {}

export function createTimerContext(props: CreateTimerContextProps) {
  const [state, send] = useMachine(timer.machine(props));

  const api = $derived(
    reflect(() => timer.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setTimerContext(value: CreateTimerContextReturn) {
  setContext('Timer', value);
}

export function useTimerContext() {
  return getContext<CreateTimerContextReturn>('Timer');
}

export function setTimerItemContext(value: timer.ItemProps) {
  setContext('TimerItem', value);
}

export function useTimerItemContext() {
  return getContext<timer.ItemProps>('TimerItem');
}
