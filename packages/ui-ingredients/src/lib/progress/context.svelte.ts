import {Context} from '$lib/context.svelte.js';
import type {CreateProgressReturn} from './create-progress.svelte.js';

export const progressContext = new Context<CreateProgressReturn>('Progress');
