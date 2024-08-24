import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';

export interface CreateTabsProps extends tabs.Context {}
export interface CreateTabsReturn extends tabs.Api {}

export function createTabs(props: CreateTabsProps) {
  const [state, send] = useMachine(tabs.machine(props));

  const api = $derived(reflect(() => tabs.connect(state, send, normalizeProps)));

  return api;
}
