import {Context} from '$lib/utils.svelte.js';
import type {CreatePresenceReturn} from './create-presence.svelte.js';

export const presenceContext = new Context<CreatePresenceReturn>('Presence');
