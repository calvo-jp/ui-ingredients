import * as popover from '@zag-js/popover';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreatePopoverContextProps extends popover.Context {}
export interface CreatePopoverContextReturn
  extends ReturnType<typeof createPopoverContext> {}

export function createPopoverContext(props: CreatePopoverContextProps) {
  const [state, send] = useMachine(popover.machine(props));

  const api = $derived(
    reflect(() => popover.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setPopoverContext(value: CreatePopoverContextReturn) {
  setContext('Popover', value);
}

export function usePopoverContext() {
  return getContext<CreatePopoverContextReturn>('Popover');
}
