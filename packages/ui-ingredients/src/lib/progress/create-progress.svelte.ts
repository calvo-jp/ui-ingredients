import * as progress from '@zag-js/progress';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateProgressProps extends progress.Context {}
export interface CreateProgressReturn extends progress.Api<any> {}

export function createProgress(props: CreateProgressProps): CreateProgressReturn {
  const [state, send] = useMachine(progress.machine(props));

  const api = $derived(reflect(() => progress.connect(state, send, normalizeProps)));

  return api;
}
