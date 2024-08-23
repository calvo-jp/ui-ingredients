import {createContext} from '$lib/create-context.svelte.js';
import * as menu from '@zag-js/menu';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateMenuMachineProps extends menu.Context {}

export interface CreateMenuMachineReturn
  extends ReturnType<typeof createMenuMachine> {}

export function createMenuMachine(props: CreateMenuMachineProps) {
  const [state, send] = useMachine(menu.machine(props));

  const api = $derived(
    reflect(() => menu.connect(state, send, normalizeProps)),
  );

  return api;
}

export const [setMenuContext, getMenuContext] =
  createContext<CreateMenuMachineReturn>('Menu');

export const [setMenuItemGroupPropsContext, getMenuItemGroupPropsContext] =
  createContext<menu.ItemGroupProps>('MenuItemGroup');

export const [setMenuOptionItemPropsContext, getMenuOptionItemPropsContext] =
  createContext<menu.OptionItemProps>('MenuOptionItem');
