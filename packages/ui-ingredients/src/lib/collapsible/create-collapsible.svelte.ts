import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateCollapsibleProps
  extends Omit<collapsible.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateCollapsibleReturn extends collapsible.Api {}

export function createCollapsible(props: CreateCollapsibleProps): CreateCollapsibleReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    collapsible.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    }),
  );

  const api = $derived(reflect(() => collapsible.connect(state, send, normalizeProps)));

  return api;
}
