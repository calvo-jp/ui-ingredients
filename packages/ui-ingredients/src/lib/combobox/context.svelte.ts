import {Context} from '$lib/utils.svelte.js';
import type {ItemGroupProps, ItemProps} from '@zag-js/combobox';
import type {CreateComboboxReturn} from './create-combobox.svelte.js';

export const comboboxContext = new Context<CreateComboboxReturn>('Combobox');
export const comboboxItemPropsContext = new Context<ItemProps>('ComboboxItem');
export const comboboxItemGroupPropsContext = new Context<ItemGroupProps>('ComboboxItemGroup');
