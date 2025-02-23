import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateCollapsibleProps
  extends Omit<
    collapsible.Props,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateCollapsibleReturn extends collapsible.Api {}

export function createCollapsible(
  props: CreateCollapsibleProps,
): CreateCollapsibleReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: collapsible.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    ...props,
  }));

  const service = useMachine(collapsible.machine, context);

  return reflect(() => collapsible.connect(service, normalizeProps));
}
