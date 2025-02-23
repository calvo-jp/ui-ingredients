import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateMenuProps
  extends Omit<menu.Props, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateMenuReturn extends menu.Api {
  service: menu.Service;
}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: menu.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    ...props,
  }));

  const service = useMachine(menu.machine, context);

  return reflect(() => ({
    ...menu.connect(service, normalizeProps),
    service,
  }));
}
