import {createContext} from '$lib/create-context.svelte.js';
import type {ItemGroupProps, ItemProps} from '@zag-js/select';
import type {CreateSelectReturn} from './create-select.svelte.js';

export const [getSelectContext, setSelectContext] =
  createContext<CreateSelectReturn>('Select');

export const [getSelectItemPropsContext, setSelectItemPropsContext] =
  createContext<ItemProps>('SelectItem');

export const [getSelectItemGroupPropsContext, setSelectItemGroupPropsContext] =
  createContext<ItemGroupProps>('SelectItemGroup');
