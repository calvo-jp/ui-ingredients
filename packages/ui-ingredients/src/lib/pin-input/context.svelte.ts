import {Context} from '$lib/utils.svelte.js';
import type {CreatePinInputReturn} from './create-pin-input.svelte.js';

export const pinInputContext = new Context<CreatePinInputReturn>('PinInput');
