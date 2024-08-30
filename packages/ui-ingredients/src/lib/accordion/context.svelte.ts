import {Context} from '$lib/context.svelte.js';
import type {ItemProps} from '@zag-js/accordion';
import type {CreateAccordionReturn} from './create-accordion.svelte.js';

export const accordionContext = new Context<CreateAccordionReturn>('Accordion');
export const accordionItemPropsContext = new Context<ItemProps>(
  'AccordionItem',
);
