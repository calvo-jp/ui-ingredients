import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';
import type {GenericObject} from '../types.js';
import {parts} from './color-picker-anatomy.js';

export interface ElementIds extends colorPicker.ElementIds {
  view?: string;
}

export interface CreateColorPickerProps
  extends Omit<colorPicker.Props, 'ids' | 'dir' | 'getRootNode'> {
  ids?: ElementIds;
}

export interface CreateColorPickerReturn extends colorPicker.Api {
  getViewProps(props: {format: colorPicker.ColorFormat}): GenericObject;
  getFormats(): {label: string; value: colorPicker.ColorFormat}[];
}

export function createColorPicker(
  props: CreateColorPickerProps,
): CreateColorPickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(colorPicker.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = colorPicker.connect(service, normalizeProps);

    return {
      ...api,
      getViewProps(viewProps) {
        return {
          id: `colorPicker:${props.id}:view`,
          hidden: viewProps.format !== api.format,
          'data-format': api.format,
          ...parts.view.attrs,
        };
      },
      getFormats() {
        return [
          {
            label: 'RGBA',
            value: 'rgba',
          },
          {
            label: 'HSLA',
            value: 'hsla',
          },
          {
            label: 'HSBA',
            value: 'hsba',
          },
        ];
      },
    };
  });
}
