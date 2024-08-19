import * as accordion from '@zag-js/accordion';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateAccordionContextProps extends accordion.Context {}
export interface CreateAccordionContextReturn extends ReturnType<typeof createAccordionContext> {}

export function createAccordionContext(props: CreateAccordionContextProps): accordion.Api {
  const [state, send] = useMachine(accordion.machine(props));

  const api = $derived(reflect(() => accordion.connect(state, send, normalizeProps)));

  return api;
}

export function setAccordionContext(value: CreateAccordionContextReturn) {
  return setContext(
    'Accordion',
    reflect(() => value),
  );
}

export function useAccordionContext() {
  return getContext<CreateAccordionContextReturn>('Accordion');
}

export function setAccordionItemContext(value: accordion.ItemProps) {
  setContext<accordion.ItemProps>('AccordionItem', value);
}

export function useAccordionItemContext() {
  return getContext<accordion.ItemProps>('AccordionItem');
}
