import type {ItemGroupProps, ItemProps} from '@zag-js/combobox';
import {createContext} from '../create-context.svelte.js';
import type {CreateComboboxReturn} from './create-combobox.svelte.js';

export const [getComboboxContext, setComboboxContext] =
  createContext<CreateComboboxReturn>('Combobox');

export const [getComboboxItemPropsContext, setComboboxItemPropsContext] =
  createContext<ItemProps>('ComboboxItem.props');

export const [
  getComboboxItemGroupPropsContext,
  setComboboxItemGroupPropsContext,
] = createContext<ItemGroupProps>('ComboboxItemGroup.props');
