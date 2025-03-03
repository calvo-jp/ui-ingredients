import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import type {GenericObject} from '../types.js';
import {parts} from './color-picker-anatomy.js';

export interface CreateColorPickerProps
  extends Omit<colorPicker.Props, 'dir' | 'getRootNode' | 'open.controlled'> {}

export interface CreateColorPickerReturn extends colorPicker.Api {
  getViewProps(props: {format: colorPicker.ColorFormat}): GenericObject;
  getFormats(): {label: string; value: colorPicker.ColorFormat}[];
}

export function createColorPicker(
  props: CreateColorPickerProps,
): CreateColorPickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: colorPicker.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(colorPicker.machine, context);

  return reflect(() => {
    const o = colorPicker.connect(service, normalizeProps);

    return {
      ...o,
      getViewProps(props) {
        return {
          hidden: props.format !== o.format,
          'data-format': o.format,
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
