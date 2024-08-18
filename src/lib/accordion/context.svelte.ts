import * as accordion from '@zag-js/accordion';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateAccordionContextProps extends accordion.Context {}
export interface CreateAccordionContextReturn extends ReturnType<typeof createAccordionContext> {}

export function createAccordionContext(props: CreateAccordionContextProps) {
  const [state, send] = useMachine(accordion.machine(props));

  const api = $derived(accordion.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setAccordionContext(value: CreateAccordionContextReturn) {
  return setContext('Accordion', value);
}

export function useAccordionContext() {
  return getContext<CreateAccordionContextReturn>('Accordion');
}

export function createAccordionItemContext(value: accordion.ItemProps) {
  setContext<accordion.ItemProps>('AccordionItem', value);
  return value;
}

export function useAccordionItemContext() {
  return getContext<accordion.ItemProps>('AccordionItem');
}
