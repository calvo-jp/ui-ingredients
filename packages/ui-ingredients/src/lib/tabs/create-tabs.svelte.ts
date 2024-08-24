import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';

export interface CreateTabsProps extends Omit<tabs.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTabsReturn extends tabs.Api {}

export function createTabs(props: CreateTabsProps) {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    tabs.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => tabs.connect(state, send, normalizeProps)));

  return api;
}
