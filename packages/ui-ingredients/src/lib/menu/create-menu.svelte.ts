import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateMenuProps
  extends Omit<menu.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateMenuReturn extends menu.Api {}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    menu.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    }),
  );

  const api = $derived(
    reflect(() => menu.connect(state, send, normalizeProps)),
  );

  return api;
}
