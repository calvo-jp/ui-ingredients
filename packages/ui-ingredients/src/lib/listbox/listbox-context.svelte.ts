import type {ItemGroupProps, ItemProps} from '@zag-js/listbox';
import {createContext} from '../create-context.svelte.js';
import type {CreateListboxReturn} from './create-listbox.svelte.js';

export const [getListboxContext, setListboxContext] =
  createContext<CreateListboxReturn>('Listbox');

export const [getListboxItemPropsContext, setListboxItemPropsContext] =
  createContext<ItemProps>('ListboxItem.props');

export const [
  getListboxItemGroupPropsContext,
  setListboxItemGroupPropsContext,
] = createContext<ItemGroupProps>('ListboxItemGroup.props');
