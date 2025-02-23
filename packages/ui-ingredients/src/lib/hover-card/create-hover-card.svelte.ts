import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateHoverCardProps
  extends Omit<
    hoverCard.Props,
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

  const id = createUniqueId();

  const context: hoverCard.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    ...props,
  }));

  const service = useMachine(hoverCard.machine, context);

  return reflect(() => hoverCard.connect(service, normalizeProps));
}
