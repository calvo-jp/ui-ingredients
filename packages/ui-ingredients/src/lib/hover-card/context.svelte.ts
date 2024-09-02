import {createContext} from '$lib/create-context.svelte.js';
import type {CreateHoverCardReturn} from './create-hover-card.svelte.js';

export const [getHoverCardContext, setHoverCardContext] =
  createContext<CreateHoverCardReturn>('HoverCard');
