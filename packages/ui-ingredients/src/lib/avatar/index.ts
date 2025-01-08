export * as Avatar from './avatar.js';

export type {AvatarFallbackProps} from './avatar-fallback.svelte';
export type {AvatarImageProps} from './avatar-image.svelte';
export type {AvatarProps} from './avatar-root.svelte';

export {anatomy as avatarAnatomy} from './avatar-anatomy.js';
export {getAvatarContext, setAvatarContext} from './avatar-context.svelte.js';
export {
  createAvatar,
  type CreateAvatarProps,
  type CreateAvatarReturn,
} from './create-avatar.svelte.js';
