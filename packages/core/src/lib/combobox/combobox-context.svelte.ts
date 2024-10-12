import {createContext} from '$lib/create-context.svelte.js';
import type {ItemGroupProps, ItemProps} from '@zag-js/combobox';
import type {CreateComboboxReturn} from './create-combobox.svelte.js';

export const [getComboboxContext, setComboboxContext] =
  createContext<CreateComboboxReturn>('Combobox');

export const [getComboboxItemPropsContext, setComboboxItemPropsContext] =
  createContext<ItemProps>('ComboboxItem [PROPS]');

export const [
  getComboboxItemGroupPropsContext,
  setComboboxItemGroupPropsContext,
] = createContext<ItemGroupProps>('ComboboxItemGroup [PROPS]');
