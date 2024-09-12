import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateHoverCardProps
  extends Omit<
    hoverCard.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateHoverCardReturn extends hoverCard.Api {}

export function createHoverCard(
  props: CreateHoverCardProps,
): CreateHoverCardReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: hoverCard.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    open: props.defaultOpen ?? props.open,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.open != null,
  }));

  const [state, send] = useMachine(hoverCard.machine(context), {context});

  return reflect(() => hoverCard.connect(state, send, normalizeProps));
}
