import * as floatingPanel from '@zag-js/floating-panel';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateFloatingPanelProps
  extends Omit<floatingPanel.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateFloatingPanelReturn extends floatingPanel.Api {}

export function createFloatingPanel(
  props: CreateFloatingPanelProps,
): CreateFloatingPanelReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: floatingPanel.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(floatingPanel.machine, context);

  return reflect(() => floatingPanel.connect(service, normalizeProps));
}
