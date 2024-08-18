import * as progress from '@zag-js/progress';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateProgressContextProps extends progress.Context {}
export interface CreateProgressContextReturn extends ReturnType<typeof createProgressContext> {}

export function createProgressContext(props: CreateProgressContextProps) {
  const [state, send] = useMachine(progress.machine(props));

  const api = $derived(progress.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setProgressContext(value: CreateProgressContextReturn) {
  setContext('Progress', value);
}

export function useProgressContext() {
  return getContext<CreateProgressContextReturn>('Progress');
}
