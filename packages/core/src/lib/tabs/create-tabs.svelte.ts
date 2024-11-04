import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';

export interface CreateTabsProps
  extends Omit<tabs.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateTabsReturn extends tabs.Api {}

export function createTabs(props: CreateTabsProps): CreateTabsReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: tabs.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(tabs.machine(context), {context});

  return reflect(() => tabs.connect(state, send, normalizeProps));
}