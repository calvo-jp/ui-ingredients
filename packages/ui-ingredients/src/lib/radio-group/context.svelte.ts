import {Context} from '$lib/utils.svelte.js';
import type {ItemProps} from '@zag-js/radio-group';
import type {CreateRadioGroupReturn} from './create-radio-group.svelte.js';

export const radioGroupContext = new Context<CreateRadioGroupReturn>(
  'RadioGroup',
);
export const radioGroupItemPropsContext = new Context<ItemProps>(
  'RadioGroupItem',
);
