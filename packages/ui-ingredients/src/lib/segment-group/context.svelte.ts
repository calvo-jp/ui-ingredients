import * as segmentGroup from '@zag-js/radio-group';
import {mergeProps, normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';
import {parts} from './anatomy.js';

export interface CreateSegmentGroupContextProps extends segmentGroup.Context {}
export interface CreateSegmentGroupContextReturn
  extends ReturnType<typeof createSegmentGroupContext> {}

export function createSegmentGroupContext(
  props: CreateSegmentGroupContextProps,
) {
  const [state, send] = useMachine(segmentGroup.machine(props));

  const api = $derived(segmentGroup.connect(state, send, normalizeProps));

  const modified = $derived(
    reflect(() => ({
      ...api,
      getIndicatorProps() {
        return mergeProps(api.getIndicatorProps(), parts.indicator.attrs);
      },
      getItemControlProps(props: segmentGroup.ItemProps) {
        return mergeProps(
          api.getItemControlProps(props),
          parts.itemControl.attrs,
        );
      },
      getItemProps(props: segmentGroup.ItemProps) {
        return mergeProps(api.getItemProps(props), parts.item.attrs);
      },
      getItemTextProps(props: segmentGroup.ItemProps) {
        return mergeProps(api.getItemTextProps(props), parts.itemText.attrs);
      },
      getLabelProps() {
        return mergeProps(api.getLabelProps(), parts.label.attrs);
      },
      getRootProps() {
        return mergeProps(api.getRootProps(), parts.root.attrs);
      },
    })),
  );

  return modified;
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
