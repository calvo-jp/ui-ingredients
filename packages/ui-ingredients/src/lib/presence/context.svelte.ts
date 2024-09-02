import {createContext} from '$lib/create-context.svelte.js';
import type {CreatePresenceReturn} from './create-presence.svelte.js';

export const [getPresenceContext, setPresenceContext] =
  createContext<CreatePresenceReturn>('Presence');
