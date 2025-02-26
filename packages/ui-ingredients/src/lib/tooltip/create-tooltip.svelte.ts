import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateTooltipProps
  extends Omit<tooltip.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: CreateTooltipProps): CreateTooltipReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: tooltip.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(tooltip.machine, context);

  return reflect(() => tooltip.connect(service, normalizeProps));
}
