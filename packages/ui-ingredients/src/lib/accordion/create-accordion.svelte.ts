import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as accordion from '@zag-js/accordion';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateAccordionProps
  extends Omit<accordion.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateAccordionReturn extends accordion.Api {}

export function createAccordion(
  props: CreateAccordionProps,
): CreateAccordionReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    accordion.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => accordion.connect(state, send, normalizeProps)),
  );

  return api;
}
