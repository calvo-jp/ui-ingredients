import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timePicker from '@zag-js/time-picker';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

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

  const id = createUniqueId();

  const context: timePicker.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    locale: locale?.locale,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    ...props,
  }));

  const [state, send] = useMachine(timePicker.machine(context), {context});

  return reflect(() => timePicker.connect(state, send, normalizeProps));
}
