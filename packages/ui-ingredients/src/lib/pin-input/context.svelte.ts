import {Context} from '$lib/context.svelte.js';
import type {CreatePinInputReturn} from './create-pin-input.svelte.js';

export const pinInputContext = new Context<CreatePinInputReturn>('PinInput');
