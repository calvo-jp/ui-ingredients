import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateCollapsibleProps extends collapsible.Context {}
export interface CreateCollapsibleReturn extends collapsible.Api {}

export function createCollapsible(props: CreateCollapsibleProps): CreateCollapsibleReturn {
  const [state, send] = useMachine(collapsible.machine(props));

  const api = $derived(reflect(() => collapsible.connect(state, send, normalizeProps)));

  return api;
}
