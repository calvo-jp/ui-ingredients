import * as datePicker from '@zag-js/date-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateDatePickerProps
  extends Omit<datePicker.Props, 'dir' | 'getRootNode'> {}

export interface CreateDatePickerReturn extends datePicker.Api {}

export function createDatePicker(
  props: CreateDatePickerProps,
): CreateDatePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(datePicker.machine, () => ({
    dir: locale?.dir,
    locale: locale?.locale,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => datePicker.connect(service, normalizeProps));
}
