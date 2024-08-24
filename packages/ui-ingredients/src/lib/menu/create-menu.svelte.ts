import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateMenuProps extends menu.Context {}
export interface CreateMenuReturn extends menu.Api {}

export function createMenu(props: CreateMenuProps): CreateMenuReturn {
  const [state, send] = useMachine(menu.machine(props));

  const api = $derived(reflect(() => menu.connect(state, send, normalizeProps)));

  return api;
}
