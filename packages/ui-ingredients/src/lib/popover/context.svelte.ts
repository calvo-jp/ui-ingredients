import {Context} from '$lib/context.svelte.js';
import type {CreatePopoverReturn} from './create-popover.svelte.js';

export const popoverContext = new Context<CreatePopoverReturn>('Popover');
