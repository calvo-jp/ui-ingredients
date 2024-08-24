import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateStepsProps extends steps.Context {}
export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: CreateStepsProps) {
  const [state, send] = useMachine(steps.machine(props));

  const api = $derived(reflect(() => steps.connect(state, send, normalizeProps)));

  return api;
}
