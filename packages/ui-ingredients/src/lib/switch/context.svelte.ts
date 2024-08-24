import {Context} from '$lib/utils.svelte.js';
import type {CreateSwitchReturn} from './create-switch.svelte.js';

export const switchContext = new Context<CreateSwitchReturn>('Switch');
