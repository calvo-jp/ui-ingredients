import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateTabsProps
  extends Omit<tabs.Props, 'dir' | 'getRootNode'> {}

export interface CreateTabsReturn extends tabs.Api {}

export function createTabs(props: CreateTabsProps): CreateTabsReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(tabs.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => tabs.connect(service, normalizeProps));
}
