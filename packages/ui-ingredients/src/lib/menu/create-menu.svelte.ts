import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateMenuProps
  extends Omit<menu.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
}

export interface CreateMenuReturn extends menu.Api {}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    menu.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
      'open.controlled': props.open !== undefined,
    }),
  );

  const api = $derived(reflect(() => menu.connect(state, send, normalizeProps)));

  return api;
}
