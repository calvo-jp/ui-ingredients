import {createContext} from '../create-context.svelte.js';
import type {CreateAvatarReturn} from './create-avatar.svelte.js';

export const [getAvatarContext, setAvatarContext] =
  createContext<CreateAvatarReturn>('Avatar');
