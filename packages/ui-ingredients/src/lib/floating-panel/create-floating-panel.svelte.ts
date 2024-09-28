import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as floatingPanel from '@zag-js/floating-panel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateFloatingPanelProps
  extends Omit<floatingPanel.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateFloatingPanelReturn extends floatingPanel.Api<any> {}

export function createFloatingPanel(
  props: CreateFloatingPanelProps,
): CreateFloatingPanelReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: floatingPanel.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(floatingPanel.machine(context), {context});

  return reflect(() => floatingPanel.connect(state, send, normalizeProps));
}
