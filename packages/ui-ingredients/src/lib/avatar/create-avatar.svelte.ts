import * as avatar from '@zag-js/avatar';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateAvatarProps extends avatar.Context {}
export interface CreateAvatarReturn extends avatar.Api {}

export function createAvatar(props: CreateAvatarProps): CreateAvatarReturn {
  const [state, send] = useMachine(avatar.machine(props));

  const api = $derived(reflect(() => avatar.connect(state, send, normalizeProps)));

  return api;
}
