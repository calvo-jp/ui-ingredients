import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateSegmentGroupContextProps extends segmentGroup.Context {}
export interface CreateSegmentGroupContextReturn
  extends ReturnType<typeof createSegmentGroupContext> {}

export function createSegmentGroupContext(
  props: CreateSegmentGroupContextProps,
) {
  const [state, send] = useMachine(segmentGroup.machine(props));

  const api = $derived(segmentGroup.connect(state, send, normalizeProps));

  return api;
}

export function setSegmentGroupContext(value: CreateSegmentGroupContextReturn) {
  setContext('SegmentGroup', value);
}

export function useSegmentGroupContext() {
  return getContext<CreateSegmentGroupContextReturn>('SegmentGroup');
}

export function setSegmentGroupItemPropsContext(value: segmentGroup.ItemProps) {
  setContext('SegmentGroupItem', value);
}

export function useSegmentGroupItemPropsContext() {
  return getContext<segmentGroup.ItemProps>('SegmentGroupItem');
}
