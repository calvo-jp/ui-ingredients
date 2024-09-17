import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateMenuProps
  extends Omit<menu.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateMenuReturn extends menu.Api {}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: menu.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    open: props.defaultOpen ?? props.open,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.open != null,
  }));

  const [state, send] = useMachine(menu.machine(context), {context});

  return reflect(() => menu.connect(state, send, normalizeProps));
}
