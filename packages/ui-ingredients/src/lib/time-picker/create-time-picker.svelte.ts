import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timePicker from '@zag-js/time-picker';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateTimePickerProps
  extends Omit<timePicker.Props, 'dir' | 'getRootNode'> {}

export interface CreateTimePickerReturn extends timePicker.Api {}

export function createTimePicker(
  props: CreateTimePickerProps,
): CreateTimePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(timePicker.machine, () => ({
    dir: locale?.dir,
    locale: locale?.locale,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => timePicker.connect(service, normalizeProps));
}
