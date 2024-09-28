import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timePicker from '@zag-js/time-picker';
import {uid} from 'uid';

export interface CreateTimePickerProps
  extends Omit<
    timePicker.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateTimePickerReturn extends timePicker.Api {}

export function createTimePicker(
  props: CreateTimePickerProps,
): CreateTimePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: timePicker.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    locale: locale?.locale,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send] = useMachine(timePicker.machine(context), {context});

  return reflect(() => timePicker.connect(state, send, normalizeProps));
}
