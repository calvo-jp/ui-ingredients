import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timePicker from '@zag-js/time-picker';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateTimePickerProps
  extends Omit<timePicker.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateTimePickerReturn extends timePicker.Api {}

export function createTimePicker(
  props: CreateTimePickerProps,
): CreateTimePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: timePicker.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    locale: locale?.locale,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(timePicker.machine, context);

  return reflect(() => timePicker.connect(service, normalizeProps));
}
