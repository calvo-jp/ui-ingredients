import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as accordion from '@zag-js/accordion';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateAccordionProps
  extends Omit<Partial<accordion.Context>, 'dir' | 'getRootNode'> {}

export interface CreateAccordionReturn extends accordion.Api {}

export function createAccordion(props: CreateAccordionProps): CreateAccordionReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    accordion.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => accordion.connect(state, send, normalizeProps)));

  return api;
}
