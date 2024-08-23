import {createContext} from '$lib/create-context.svelte.js';
import type {ItemProps} from '@zag-js/accordion';
import type {CreateAccordionReturn} from './create-accordion.svelte.js';

export const [setAccordionContext, getAccordionContext] =
  createContext<CreateAccordionReturn>('Accordion');

export const [setAccordionItemPropsContext, getAccordionItemPropsContext] =
  createContext<ItemProps>('AccordionItem');
