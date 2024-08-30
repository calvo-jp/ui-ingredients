import {Context} from '$lib/context.svelte.js';
import type {ItemGroupProps, ItemProps} from '@zag-js/select';
import type {CreateSelectReturn} from './create-select.svelte.js';

export const selectContext = new Context<CreateSelectReturn>('Select');
export const selectItemPropsContext = new Context<ItemProps>('SelectItem');
export const selectItemGroupPropsContext = new Context<ItemGroupProps>(
  'SelectItemGroup',
);
