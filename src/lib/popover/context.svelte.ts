import * as popover from '@zag-js/popover';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreatePopoverContextProps extends popover.Context {}
export interface CreatePopoverContextReturn extends ReturnType<typeof createPopoverContext> {}

export function createPopoverContext(props: CreatePopoverContextProps) {
  const [state, send] = useMachine(popover.machine(props));

  const api = $derived(popover.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setPopoverContext(value: CreatePopoverContextReturn) {
  setContext('Popover', value);
}

export function usePopoverContext() {
  return getContext<CreatePopoverContextReturn>('Popover');
}
