import {createContext} from '$lib/create-context.svelte.js';
import type {ItemProps} from '@zag-js/radio-group';
import type {CreateRadioGroupReturn} from './create-radio-group.svelte.js';

export const [getRadioGroupContext, setRadioGroupContext] =
  createContext<CreateRadioGroupReturn>('RadioGroup');

export const [getRadioGroupItemPropsContext, setRadioGroupItemPropsContext] =
  createContext<ItemProps>('RadioGroupItem');
