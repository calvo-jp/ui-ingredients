import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as avatar from '@zag-js/avatar';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateAvatarProps
  extends Omit<avatar.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateAvatarReturn extends avatar.Api {}

export function createAvatar(props: CreateAvatarProps): CreateAvatarReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    avatar.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => avatar.connect(state, send, normalizeProps)),
  );

  return api;
}
