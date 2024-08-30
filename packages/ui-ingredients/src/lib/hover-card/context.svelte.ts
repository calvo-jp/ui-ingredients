import {Context} from '$lib/context.svelte.js';
import type {CreateHoverCardReturn} from './create-hover-card.svelte.js';

export const hoverCardContext = new Context<CreateHoverCardReturn>('HoverCard');
