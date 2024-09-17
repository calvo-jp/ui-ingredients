import {createContext} from '$lib/create-context.svelte.js';
import type {ItemProps} from '@zag-js/accordion';
import type {CreateAccordionReturn} from './create-accordion.svelte.js';

export const [getAccordionContext, setAccordionContext] =
  createContext<CreateAccordionReturn>('Accordion');

export const [getAccordionItemPropsContext, setAccordionItemPropsContext] =
  createContext<ItemProps>('AccordionItem');
