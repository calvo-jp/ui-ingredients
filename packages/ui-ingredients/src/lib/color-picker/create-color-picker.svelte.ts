import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import type {GenericObject} from '../types.js';
import {parts} from './color-picker-anatomy.js';

type Omitted = 'id' | 'dir' | 'getRootNode' | 'open.controlled';

export interface CreateColorPickerProps
  extends Omit<colorPicker.Props, Omitted> {
  id?: string;
  openControlled?: boolean;
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

  const id = createUniqueId();

  const context: colorPicker.Props = $derived.by(() => ({
    id,
    dir: locale?.dir,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
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
