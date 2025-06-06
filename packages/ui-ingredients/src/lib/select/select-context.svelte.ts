import type {ItemGroupProps, ItemProps} from '@zag-js/select';
import {createContext} from '../create-context.svelte.js';
import type {CreateSelectReturn} from './create-select.svelte.js';

export const [getSelectContext, setSelectContext] =
  createContext<CreateSelectReturn>('Select');

export const [getSelectItemPropsContext, setSelectItemPropsContext] =
  createContext<ItemProps>('SelectItem.props');

export const [getSelectItemGroupPropsContext, setSelectItemGroupPropsContext] =
  createContext<ItemGroupProps>('SelectItemGroup.props');
