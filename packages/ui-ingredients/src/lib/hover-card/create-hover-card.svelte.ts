import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateHoverCardProps extends hoverCard.Context {}
export interface CreateHoverCardReturn extends hoverCard.Api {}

export function createHoverCard(props: CreateHoverCardProps): CreateHoverCardReturn {
  const [state, send] = useMachine(hoverCard.machine(props));

  const api = $derived(reflect(() => hoverCard.connect(state, send, normalizeProps)));

  return api;
}
