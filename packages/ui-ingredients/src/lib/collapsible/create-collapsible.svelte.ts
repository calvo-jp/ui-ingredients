import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateCollapsibleProps
  extends Omit<
    collapsible.Context,
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

  const id = uid();

  const context: collapsible.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send] = useMachine(collapsible.machine(context), {context});

  return reflect(() => collapsible.connect(state, send, normalizeProps));
}
