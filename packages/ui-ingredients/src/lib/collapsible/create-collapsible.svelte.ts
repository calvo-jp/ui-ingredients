import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateCollapsibleProps
  extends Omit<collapsible.Props, 'dir' | 'getRootNode'> {}

export interface CreateCollapsibleReturn extends collapsible.Api {}

export function createCollapsible(
  props: CreateCollapsibleProps,
): CreateCollapsibleReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(collapsible.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => collapsible.connect(service, normalizeProps));
}
