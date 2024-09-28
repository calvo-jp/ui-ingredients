import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';
import {uid} from 'uid';

export interface CreateTooltipProps
  extends Omit<
    tooltip.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: CreateTooltipProps): CreateTooltipReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: tooltip.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send] = useMachine(tooltip.machine(context), {context});

  return reflect(() => tooltip.connect(state, send, normalizeProps));
}
