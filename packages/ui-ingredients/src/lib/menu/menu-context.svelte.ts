import type {ItemGroupProps, OptionItemProps} from '@zag-js/menu';
import type {HTMLButtonAttributes} from 'svelte/elements';
import {createContext} from '../create-context.svelte.js';
import type {CreateMenuReturn} from './create-menu.svelte.js';

export const [getMenuContext, setMenuContext] = createContext<CreateMenuReturn>(
  'Menu',
  false,
);

export const [getMenuItemGroupPropsContext, setMenuItemGroupPropsContext] =
  createContext<ItemGroupProps>('MenuItemGroup [PROPS]');

export const [getMenuOptionItemPropsContext, setMenuOptionItemPropsContext] =
  createContext<OptionItemProps>('MenuOptionItem [PROPS]');

export const [getMenuTriggerItemContext, setMenuTriggerItemContext] =
  createContext<HTMLButtonAttributes>('MenuTriggerItem');