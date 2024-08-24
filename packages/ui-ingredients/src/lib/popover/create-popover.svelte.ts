import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as popover from '@zag-js/popover';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePopoverProps
  extends Omit<popover.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
}

export interface CreatePopoverReturn extends popover.Api {}

export function createPopover(props: CreatePopoverProps): CreatePopoverReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    popover.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
      'open.controlled': props.open !== undefined,
    }),
  );

  const api = $derived(reflect(() => popover.connect(state, send, normalizeProps)));

  return api;
}
