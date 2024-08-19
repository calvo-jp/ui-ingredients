import * as progress from '@zag-js/progress';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateProgressContextProps extends progress.Context {}
export interface CreateProgressContextReturn extends ReturnType<typeof createProgressContext> {}

export function createProgressContext(props: CreateProgressContextProps) {
  const [state, send] = useMachine(progress.machine(props));

  const api = $derived(reflect(() => progress.connect(state, send, normalizeProps)));

  return api;
}

export function setProgressContext(value: CreateProgressContextReturn) {
  setContext('Progress', value);
}

export function useProgressContext() {
  return getContext<CreateProgressContextReturn>('Progress');
}
