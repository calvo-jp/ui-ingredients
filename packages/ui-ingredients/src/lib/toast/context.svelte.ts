import {Context} from '$lib/utils.svelte.js';
import type {CreateToastReturn} from './create-toast.svelte.js';

export const toastContext = new Context<CreateToastReturn>('Toast');
