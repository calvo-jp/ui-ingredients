import {createContext} from '../create-context.svelte.js';
import type {CreateFieldReturn} from './create-field.svelte.js';

export const [getFieldContext, setFieldContext] =
  createContext<CreateFieldReturn>('Field', false);
