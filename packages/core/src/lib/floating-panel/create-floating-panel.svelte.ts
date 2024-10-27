import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as floatingPanel from '@zag-js/floating-panel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateFloatingPanelProps
  extends Omit<floatingPanel.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateFloatingPanelReturn extends floatingPanel.Api {}

export function createFloatingPanel(
  props: CreateFloatingPanelProps,
): CreateFloatingPanelReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: floatingPanel.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(floatingPanel.machine(context), {context});

  return reflect(() => floatingPanel.connect(state, send, normalizeProps));
}
