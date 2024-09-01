import {Context} from '$lib/context.svelte.js';
import type {CreateFieldReturn} from './create-field.svelte.js';

export const fieldContext = new Context<CreateFieldReturn>('Field', false);

export const getFieldContext = (): CreateFieldReturn | null =>
  fieldContext.get();
