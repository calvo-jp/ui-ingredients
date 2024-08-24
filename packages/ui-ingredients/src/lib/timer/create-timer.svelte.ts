import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';

export interface CreateTimerProps extends timer.Context {}
export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: CreateTimerProps): CreateTimerReturn {
  const [state, send] = useMachine(timer.machine(props));

  const api = $derived(reflect(() => timer.connect(state, send, normalizeProps)));

  return api;
}
