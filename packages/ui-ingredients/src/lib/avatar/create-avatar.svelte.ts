import * as avatar from '@zag-js/avatar';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateAvatarProps
  extends Omit<avatar.Props, 'dir' | 'getRootNode'> {}

export interface CreateAvatarReturn extends avatar.Api {}

export function createAvatar(props: CreateAvatarProps): CreateAvatarReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(avatar.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => avatar.connect(service, normalizeProps));
}
