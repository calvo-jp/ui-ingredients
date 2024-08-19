import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';
import {getContext, setContext} from 'svelte';

export interface CreateTooltipContextProps extends tooltip.Context {}
export interface CreateTooltipContextReturn extends ReturnType<typeof createTooltipContext> {}

export function createTooltipContext(props: CreateTooltipContextProps) {
  const [state, send] = useMachine(tooltip.machine(props));

  const api = $derived(reflect(() => tooltip.connect(state, send, normalizeProps)));

  return api;
}

export function setTooltipContext(value: CreateTooltipContextReturn) {
  setContext('Tooltip', value);
}

export function useTooltipContext() {
  return getContext<CreateTooltipContextReturn>('Tooltip');
}
