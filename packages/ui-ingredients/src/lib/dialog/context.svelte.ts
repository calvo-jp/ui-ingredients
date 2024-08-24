import {Context} from '$lib/utils.svelte.js';
import type {CreateDialogReturn} from './create-dialog.svelte.js';

export const dialogContext = new Context<CreateDialogReturn>('Dialog');
