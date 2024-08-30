import {Context} from '$lib/utils.svelte.js';
import type {CreateToggleGroupReturn} from './create-toggle-group.svelte.js';

export const toggleGroupContext = new Context<CreateToggleGroupReturn>(
  'ToggleGroup',
);
