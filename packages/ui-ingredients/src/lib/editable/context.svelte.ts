import {Context} from '$lib/context.svelte.js';
import type {CreateEditableReturn} from './create-editable.svelte.js';

export const editableContext = new Context<CreateEditableReturn>('Editable');
