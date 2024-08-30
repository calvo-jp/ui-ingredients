import {Context} from '$lib/context.svelte.js';
import type {CreateSplitterReturn} from './create-splitter.svelte.js';

export const splitterContext = new Context<CreateSplitterReturn>('Splitter');
