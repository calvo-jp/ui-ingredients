import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

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

  const [state, send] = useMachine(
    colorPicker.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      value: props.value ? colorPicker.parse(props.value) : undefined,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    }),
  );

  const api = $derived(
    reflect(() => colorPicker.connect(state, send, normalizeProps)),
  );

  return api;
}
