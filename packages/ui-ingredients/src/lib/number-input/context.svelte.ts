import {Context} from '$lib/context.svelte.js';
import type {CreateNumberInputReturn} from './create-number-input.svelte.js';

export const numberInputContext = new Context<CreateNumberInputReturn>(
  'NumberInput',
);
