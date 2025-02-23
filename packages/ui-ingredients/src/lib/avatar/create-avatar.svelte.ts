import * as avatar from '@zag-js/avatar';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateAvatarProps
  extends Omit<avatar.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateAvatarReturn extends avatar.Api {}

export function createAvatar(props: CreateAvatarProps): CreateAvatarReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: avatar.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(avatar.machine, context);

  return reflect(() => avatar.connect(service, normalizeProps));
}
