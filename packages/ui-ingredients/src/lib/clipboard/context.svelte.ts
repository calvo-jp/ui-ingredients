import {Context} from '$lib/context.svelte.js';
import type {CreateClipboardReturn} from './create-clipboard.svelte.js';

export const clipboardContext = new Context<CreateClipboardReturn>('Clipboard');
