import {createContext} from '$lib/create-context.svelte.js';
import type {ItemGroupProps, OptionItemProps} from '@zag-js/menu';
import type {HTMLAttributes} from 'svelte/elements';
import type {CreateMenuReturn} from './create-menu.svelte.js';

export const [getMenuContext, setMenuContext] = createContext<CreateMenuReturn>(
  'Menu',
  false,
);

export const [getMenuItemGroupPropsContext, setMenuItemGroupPropsContext] =
  createContext<ItemGroupProps>('MenuItemGroup');

export const [getMenuOptionItemPropsContext, setMenuOptionItemPropsContext] =
  createContext<OptionItemProps>('MenuOptionItem');

export const [getMenuTriggerItemContext, setMenuTriggerItemContext] =
  createContext<HTMLAttributes<HTMLElement>>('MenuTriggerItem');
