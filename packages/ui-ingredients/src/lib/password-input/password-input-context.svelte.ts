import {createContext} from '../create-context.svelte.js';
import type {CreatePasswordInputReturn} from './create-password-input.svelte.js';

export const [getPasswordInputContext, setPasswordInputContext] =
  createContext<CreatePasswordInputReturn>('PasswordInput');
