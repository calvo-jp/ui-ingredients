import {Context} from '$lib/utils.svelte.js';
import type {CreateCollapsibleReturn} from './create-collapsible.svelte.js';

export const collapsibleContext = new Context<CreateCollapsibleReturn>('Collapsible');
