import {createContext} from '$lib/create-context.svelte.js';
import type {
  CreatePresenceReturn,
  PresenceStrategyProps,
} from './create-presence.svelte.js';

export const [getPresenceContext, setPresenceContext] =
  createContext<CreatePresenceReturn>('Presence');

export const [
  getPresenceStrategyPropsContext,
  setPresenceStrategyPropsContext,
] = createContext<PresenceStrategyProps>('PresenceStrategyProps');
