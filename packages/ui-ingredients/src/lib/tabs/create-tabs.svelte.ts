import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';

export interface CreateTabsProps
  extends Omit<tabs.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTabsReturn extends tabs.Api {}

export function createTabs(props: CreateTabsProps) {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    tabs.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => tabs.connect(state, send, normalizeProps)),
  );

  return api;
}
