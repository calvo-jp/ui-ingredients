import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSegmentGroupProps
  extends Omit<segmentGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateSegmentGroupReturn extends segmentGroup.Api {}

export function createSegmentGroup(
  props: CreateSegmentGroupProps,
): CreateSegmentGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: segmentGroup.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(segmentGroup.machine(context));

  return reflect(() => segmentGroup.connect(state, send, normalizeProps));
}
