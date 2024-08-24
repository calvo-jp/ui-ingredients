import {Context} from '$lib/utils.svelte.js';
import type {CreateAvatarReturn} from './create-avatar.svelte.js';

export const avatarContext = new Context<CreateAvatarReturn>('Avatar');
