import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import {parts} from './segment-group-anatomy.js';

export interface CreateSegmentGroupProps
  extends Omit<segmentGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateSegmentGroupReturn extends segmentGroup.Api {}

export function createSegmentGroup(
  props: CreateSegmentGroupProps,
): CreateSegmentGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: segmentGroup.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(segmentGroup.machine, context);

  return reflect(() => {
    const o = segmentGroup.connect(service, normalizeProps);

    return {
      ...o,
      getIndicatorProps() {
        return {
          ...o.getIndicatorProps(),
          ...parts.indicator.attrs,
        };
      },
      getItemControlProps(props) {
        return {
          ...o.getItemControlProps(props),
          ...parts.itemControl.attrs,
        };
      },
      getItemProps(props) {
        return {
          ...o.getItemProps(props),
          ...parts.item.attrs,
        };
      },
      getItemTextProps(props) {
        return {
          ...o.getItemTextProps(props),
          ...parts.itemText.attrs,
        };
      },
      getLabelProps() {
        return {
          ...o.getLabelProps(),
          ...parts.label.attrs,
        };
      },
      getRootProps() {
        return {
          ...o.getRootProps(),
          ...parts.root.attrs,
        };
      },
    };
  });
}
