import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateHoverCardProps
  extends Omit<hoverCard.Context, 'id' | 'dir' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateHoverCardReturn extends hoverCard.Api {}

export function createHoverCard(props: CreateHoverCardProps): CreateHoverCardReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    hoverCard.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    }),
  );

  const api = $derived(reflect(() => hoverCard.connect(state, send, normalizeProps)));

  return api;
}
