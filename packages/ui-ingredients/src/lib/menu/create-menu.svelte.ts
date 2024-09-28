import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateMenuProps
  extends Omit<menu.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateMenuReturn extends menu.Api {
  machine: menu.Service;
}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: menu.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send, machine] = useMachine(menu.machine(context), {context});

  return reflect(() => ({
    ...menu.connect(state, send, normalizeProps),
    machine,
  }));
}
