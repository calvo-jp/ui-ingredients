import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateTooltipProps
  extends Omit<tooltip.Props, 'dir' | 'getRootNode'> {}

export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: CreateTooltipProps): CreateTooltipReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(tooltip.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => tooltip.connect(service, normalizeProps));
}
