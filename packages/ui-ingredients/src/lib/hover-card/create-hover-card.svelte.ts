import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateHoverCardProps
  extends Omit<hoverCard.Props, 'dir' | 'getRootNode'> {}

export interface CreateHoverCardReturn extends hoverCard.Api {}

export function createHoverCard(
  props: CreateHoverCardProps,
): CreateHoverCardReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(hoverCard.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => hoverCard.connect(service, normalizeProps));
}
