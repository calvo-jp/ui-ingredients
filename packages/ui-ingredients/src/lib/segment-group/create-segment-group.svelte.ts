import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSegmentGroupProps extends segmentGroup.Context {}
export interface CreateSegmentGroupReturn extends segmentGroup.Api {}

export function createSegmentGroup(props: CreateSegmentGroupProps): CreateSegmentGroupReturn {
  const [state, send] = useMachine(segmentGroup.machine(props));

  const api = $derived(reflect(() => segmentGroup.connect(state, send, normalizeProps)));

  return api;
}
