import {Context} from '$lib/utils.svelte.js';
import type {CreateCheckboxReturn} from './create-checkbox.svelte.js';

export const checkboxContext = new Context<CreateCheckboxReturn>('Checkbox');
