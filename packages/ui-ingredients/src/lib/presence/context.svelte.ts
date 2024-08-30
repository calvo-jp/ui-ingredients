import {Context} from '$lib/context.svelte.js';
import type {CreatePresenceReturn} from './create-presence.svelte.js';

export const presenceContext = new Context<CreatePresenceReturn>('Presence');
