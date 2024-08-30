import {Context} from '$lib/context.svelte.js';
import type {CreateCollapsibleReturn} from './create-collapsible.svelte.js';

export const collapsibleContext = new Context<CreateCollapsibleReturn>(
  'Collapsible',
);
