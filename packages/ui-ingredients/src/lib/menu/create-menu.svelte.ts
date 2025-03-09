import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateMenuProps
  extends Omit<menu.Props, 'dir' | 'getRootNode'> {}

export interface CreateMenuReturn extends menu.Api {
  service: menu.Service;
}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(menu.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => ({
    ...menu.connect(service, normalizeProps),
    service,
  }));
}
