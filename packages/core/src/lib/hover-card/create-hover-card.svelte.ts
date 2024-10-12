import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateHoverCardProps
  extends Omit<
    hoverCard.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateHoverCardReturn extends hoverCard.Api {}

export function createHoverCard(
  props: CreateHoverCardProps,
): CreateHoverCardReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: hoverCard.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send] = useMachine(hoverCard.machine(context), {context});

  return reflect(() => hoverCard.connect(state, send, normalizeProps));
}
