import {Context} from '$lib/context.svelte.js';
import type {CreateToggleGroupReturn} from './create-toggle-group.svelte.js';

export const toggleGroupContext = new Context<CreateToggleGroupReturn>(
  'ToggleGroup',
);
