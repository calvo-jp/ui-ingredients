import {createContext} from '$lib/create-context.svelte.js';
import type {CreateClipboardReturn} from './create-clipboard.svelte.js';

export const [getClipboardContext, setClipboardContext] =
  createContext<CreateClipboardReturn>('Clipboard');
