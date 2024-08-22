import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateMenuContextProps extends menu.Context {}
export interface CreateMenuContextReturn
  extends ReturnType<typeof createMenuContext> {}

export function createMenuContext(props: CreateMenuContextProps) {
  const [state, send] = useMachine(menu.machine(props));

  const api = $derived(
    reflect(() => menu.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setMenuContext(value: CreateMenuContextReturn) {
  setContext('Menu', value);
}

export function useMenuContext() {
  return getContext<CreateMenuContextReturn>('Menu');
}

export function setMenuItemPropsContext(value: CreateMenuContextReturn) {
  setContext('MenuItem', value);
}

export function useMenuItemPropsContext() {
  return getContext<CreateMenuContextReturn>('MenuItem');
}
