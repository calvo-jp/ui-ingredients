import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {mergeProps} from '$lib/merge-props.js';
import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {parts} from './segment-group-anatomy.js';

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

  const [state, send] = useMachine(segmentGroup.machine(context), {context});

  return reflect(() => {
    const o = segmentGroup.connect(state, send, normalizeProps);

    return {
      ...o,
      getIndicatorProps() {
        return mergeProps(o.getIndicatorProps(), parts.indicator.attrs);
      },
      getItemControlProps(props) {
        return mergeProps(
          o.getItemControlProps(props),
          parts.itemControl.attrs,
        );
      },
      getItemProps(props) {
        return mergeProps(o.getItemProps(props), parts.item.attrs);
      },
      getItemTextProps(props) {
        return mergeProps(o.getItemTextProps(props), parts.itemText.attrs);
      },
      getLabelProps() {
        return mergeProps(o.getLabelProps(), parts.label.attrs);
      },
      getRootProps() {
        return mergeProps(o.getRootProps(), parts.root.attrs);
      },
    };
  });
}
