import type {ItemProps} from '@zag-js/accordion';
import {createContext} from '../create-context.svelte.js';
import type {CreateAccordionReturn} from './create-accordion.svelte.js';

export const [getAccordionContext, setAccordionContext] =
  createContext<CreateAccordionReturn>('Accordion');

export const [getAccordionItemPropsContext, setAccordionItemPropsContext] =
  createContext<ItemProps>('AccordionItem.props');
