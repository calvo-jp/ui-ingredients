import * as accordion from '@zag-js/accordion';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateAccordionProps extends accordion.Context {}

export interface CreateAccordionReturn extends accordion.Api {}

export function createAccordion(props: CreateAccordionProps): CreateAccordionReturn {
  const [state, send] = useMachine(accordion.machine(props));

  const api = $derived(reflect(() => accordion.connect(state, send, normalizeProps)));

  return api;
}
