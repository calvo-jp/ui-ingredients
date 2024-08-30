import {Context} from '$lib/context.svelte.js';
import type {CreateToastReturn} from './create-toast.svelte.js';

export const toastContext = new Context<CreateToastReturn>('Toast');
