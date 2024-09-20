import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import type {GenericObject} from '$lib/types.js';
import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';
import {parts} from './color-picker-anatomy.js';

type Omitted = 'id' | 'dir' | 'value' | 'getRootNode' | 'open.controlled';

export interface CreateColorPickerProps
  extends Omit<colorPicker.Context, Omitted> {
  id?: string | null;
  value?: string;
  defaultOpen?: boolean;
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

  const id = uid();

  const context: colorPicker.Context = $derived.by(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    open: props.defaultOpen ?? props.open,
    value: props.value ? colorPicker.parse(props.value) : undefined,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.open != null,
  }));

  const [state, send] = useMachine(colorPicker.machine(context), {context});

  return reflect(() => {
    const o = colorPicker.connect(state, send, normalizeProps);

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
