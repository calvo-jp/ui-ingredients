import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as popover from '@zag-js/popover';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePopoverProps
  extends Omit<popover.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreatePopoverReturn extends popover.Api {}

export function createPopover(props: CreatePopoverProps): CreatePopoverReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    popover.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    }),
  );

  const api = $derived(reflect(() => popover.connect(state, send, normalizeProps)));

  return api;
}
