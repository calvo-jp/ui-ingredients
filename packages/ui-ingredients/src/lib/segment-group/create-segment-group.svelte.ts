import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';
import {parts} from './segment-group-anatomy.js';

export interface CreateSegmentGroupProps
  extends Omit<segmentGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateSegmentGroupReturn extends segmentGroup.Api {}

export function createSegmentGroup(
  props: CreateSegmentGroupProps,
): CreateSegmentGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(segmentGroup.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = segmentGroup.connect(service, normalizeProps);

    return {
      ...api,
      getIndicatorProps() {
        return {
          ...api.getIndicatorProps(),
          ...parts.indicator.attrs,
        };
      },
      getItemControlProps(props) {
        return {
          ...api.getItemControlProps(props),
          ...parts.itemControl.attrs,
        };
      },
      getItemProps(props) {
        return {
          ...api.getItemProps(props),
          ...parts.item.attrs,
        };
      },
      getItemTextProps(props) {
        return {
          ...api.getItemTextProps(props),
          ...parts.itemText.attrs,
        };
      },
      getLabelProps() {
        return {
          ...api.getLabelProps(),
          ...parts.label.attrs,
        };
      },
      getRootProps() {
        return {
          ...api.getRootProps(),
          ...parts.root.attrs,
        };
      },
    };
  });
}
