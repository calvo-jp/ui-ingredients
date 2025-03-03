import * as avatar from '@zag-js/avatar';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateAvatarProps
  extends Omit<avatar.Props, 'dir' | 'getRootNode'> {}

export interface CreateAvatarReturn extends avatar.Api {}

export function createAvatar(props: CreateAvatarProps): CreateAvatarReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: avatar.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(avatar.machine, context);

  return reflect(() => avatar.connect(service, normalizeProps));
}
