import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';
import {getContext, setContext} from 'svelte';

export interface CreateTabsContextProps extends tabs.Context {}
export interface CreateTabsContextReturn extends ReturnType<typeof createTabsContext> {}

export function createTabsContext(props: CreateTabsContextProps) {
  const [state, send] = useMachine(tabs.machine(props));

  const api = $derived(tabs.connect(state, send, normalizeProps));

  return {
    get api() {
      return api;
    },
  };
}

export function setTabsContext(value: CreateTabsContextReturn) {
  setContext('Tabs', value);
}

export function useTabsContext() {
  return getContext<CreateTabsContextReturn>('Tabs');
}
