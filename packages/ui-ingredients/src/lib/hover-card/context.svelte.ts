import {Context} from '$lib/utils.svelte.js';
import type {CreateHoverCardReturn} from './create-hover-card.svelte.js';

export const hoverCardContext = new Context<CreateHoverCardReturn>('HoverCard');
