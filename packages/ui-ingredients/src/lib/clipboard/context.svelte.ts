import {Context} from '$lib/utils.svelte.js';
import type {CreateClipboardReturn} from './create-clipboard.svelte.js';

export const clipboardContext = new Context<CreateClipboardReturn>('Clipboard');
