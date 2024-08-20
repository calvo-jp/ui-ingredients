import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateHoverCardContextProps extends hoverCard.Context {}
export interface CreateHoverCardContextReturn
  extends ReturnType<typeof createHoverCardContext> {}

export function createHoverCardContext(props: CreateHoverCardContextProps) {
  const [state, send] = useMachine(hoverCard.machine(props));

  const api = $derived(
    reflect(() => hoverCard.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setHoverCardContext(value: CreateHoverCardContextReturn) {
  setContext('HoverCard', value);
}

export function useHoverCardContext() {
  return getContext<CreateHoverCardContextReturn>('HoverCard');
}
