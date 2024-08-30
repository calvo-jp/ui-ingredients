import {Context} from '$lib/context.svelte.js';
import type {CreateCheckboxReturn} from './create-checkbox.svelte.js';

export const checkboxContext = new Context<CreateCheckboxReturn>('Checkbox');
