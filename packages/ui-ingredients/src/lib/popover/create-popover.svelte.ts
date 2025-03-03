import * as popover from '@zag-js/popover';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreatePopoverProps
  extends Omit<popover.Props, 'dir' | 'getRootNode'> {}

export interface CreatePopoverReturn extends popover.Api {}

export function createPopover(props: CreatePopoverProps): CreatePopoverReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: popover.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(popover.machine, context);

  return reflect(() => popover.connect(service, normalizeProps));
}
