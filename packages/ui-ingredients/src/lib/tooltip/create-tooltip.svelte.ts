import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';

export interface CreateTooltipProps extends tooltip.Context {}
export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: CreateTooltipProps) {
  const [state, send] = useMachine(tooltip.machine(props));

  const api = $derived(reflect(() => tooltip.connect(state, send, normalizeProps)));

  return api;
}
