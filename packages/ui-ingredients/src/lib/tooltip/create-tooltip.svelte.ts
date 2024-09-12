import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';
import {uid} from 'uid';

export interface CreateTooltipProps
  extends Omit<
    tooltip.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: CreateTooltipProps) {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: tooltip.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    open: props.defaultOpen ?? props.open,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.open != null,
  }));

  const [state, send] = useMachine(tooltip.machine(context), {context});

  return reflect(() => tooltip.connect(state, send, normalizeProps));
}
