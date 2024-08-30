import {Context} from '$lib/context.svelte.js';
import type {ItemGroupProps, OptionItemProps} from '@zag-js/menu';
import type {CreateMenuReturn} from './create-menu.svelte.js';

export const menuContext = new Context<CreateMenuReturn>('Menu');
export const menuItemGroupPropsContext = new Context<ItemGroupProps>(
  'MenuItemGroup',
);
export const menuOptionItemPropsContext = new Context<OptionItemProps>(
  'MenuOptionItem',
);
