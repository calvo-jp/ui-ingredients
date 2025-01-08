import * as accordion from '@zag-js/accordion';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateAccordionProps
  extends Omit<accordion.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateAccordionReturn extends accordion.Api {}

export function createAccordion(
  props: CreateAccordionProps,
): CreateAccordionReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: accordion.Context = reflect(() => {
    return {
      id,
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
      ...props,
    };
  });

  const [state, send] = useMachine(accordion.machine(context), {context});

  return reflect(() => accordion.connect(state, send, normalizeProps));
}
