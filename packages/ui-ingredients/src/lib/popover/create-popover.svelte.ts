import * as popover from '@zag-js/popover';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePopoverProps extends popover.Context {}
export interface CreatePopoverReturn extends popover.Api {}

export function createPopover(props: CreatePopoverProps): CreatePopoverReturn {
  const [state, send] = useMachine(popover.machine(props));

  const api = $derived(reflect(() => popover.connect(state, send, normalizeProps)));

  return api;
}
