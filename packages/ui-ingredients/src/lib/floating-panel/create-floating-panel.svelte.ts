import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as floatingPanel from '@zag-js/floating-panel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateFloatingPanelProps
  extends Omit<floatingPanel.Context, 'dir' | 'getRootNode'> {}

export interface CreateFloatingPanelReturn extends floatingPanel.Api<any> {}

export function createFloatingPanel(
  props: CreateFloatingPanelProps,
): CreateFloatingPanelReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: floatingPanel.Context = $derived(
    reflect(() => ({
      id: props.id ?? id,
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    })),
  );

  const [state, send] = useMachine(floatingPanel.machine(context), {context});

  const api = $derived(
    reflect(() => floatingPanel.connect(state, send, normalizeProps)),
  );

  return api;
}
