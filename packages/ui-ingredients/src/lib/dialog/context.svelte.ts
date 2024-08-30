import {Context} from '$lib/context.svelte.js';
import type {CreateDialogReturn} from './create-dialog.svelte.js';

export const dialogContext = new Context<CreateDialogReturn>('Dialog');
