import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';

export interface CreateTooltipProps
  extends Omit<tooltip.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
}

export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: CreateTooltipProps) {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    tooltip.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
      'open.controlled': props.open !== undefined,
    }),
  );

  const api = $derived(reflect(() => tooltip.connect(state, send, normalizeProps)));

  return api;
}
