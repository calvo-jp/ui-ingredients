import * as accordion from '@zag-js/accordion';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateAccordionProps
  extends Omit<accordion.Props, 'dir' | 'getRootNode'> {}

export interface CreateAccordionReturn extends accordion.Api {}

export function createAccordion(
  props: CreateAccordionProps,
): CreateAccordionReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(accordion.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => accordion.connect(service, normalizeProps));
}
