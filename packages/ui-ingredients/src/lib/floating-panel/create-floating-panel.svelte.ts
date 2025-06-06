import * as floatingPanel from '@zag-js/floating-panel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateFloatingPanelProps
  extends Omit<floatingPanel.Props, 'dir' | 'getRootNode'> {}

export interface CreateFloatingPanelReturn extends floatingPanel.Api {}

export function createFloatingPanel(
  props: CreateFloatingPanelProps,
): CreateFloatingPanelReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(floatingPanel.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => floatingPanel.connect(service, normalizeProps));
}
