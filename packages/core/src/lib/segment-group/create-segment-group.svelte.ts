import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

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

  const id = uid();

  const context: segmentGroup.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(segmentGroup.machine(context));

  return reflect(() => segmentGroup.connect(state, send, normalizeProps));
}
