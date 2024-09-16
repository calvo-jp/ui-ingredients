import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateColorPickerProps
  extends Omit<
    colorPicker.Context,
    'id' | 'dir' | 'value' | 'getRootNode' | 'open.controlled'
  > {
  id?: string | null;
  value?: string;
  defaultOpen?: boolean;
}

export interface CreateColorPickerReturn extends colorPicker.Api {}

export function createColorPicker(
  props: CreateColorPickerProps,
): CreateColorPickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: colorPicker.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    open: props.defaultOpen ?? props.open,
    value: props.value ? colorPicker.parse(props.value) : undefined,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.open != null,
  }));

  const [state, send] = useMachine(colorPicker.machine(context), {context});

  return reflect(() => colorPicker.connect(state, send, normalizeProps));
}
