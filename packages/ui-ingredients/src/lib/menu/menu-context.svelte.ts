import {createContext} from '$lib/create-context.svelte.js';
import type {ItemGroupProps, OptionItemProps} from '@zag-js/menu';
import type {CreateMenuReturn} from './create-menu.svelte.js';

export const [getMenuContext, setMenuContext] =
  createContext<CreateMenuReturn>('Menu');

export const [getMenuItemGroupPropsContext, setMenuItemGroupPropsContext] =
  createContext<ItemGroupProps>('MenuItemGroup');

export const [getMenuOptionItemPropsContext, setMenuOptionItemPropsContext] =
  createContext<OptionItemProps>('MenuOptionItem');
