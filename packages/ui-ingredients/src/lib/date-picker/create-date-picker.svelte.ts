import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as datePicker from '@zag-js/date-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

type Omitted =
  | 'id'
  | 'dir'
  | 'min'
  | 'max'
  | 'value'
  | 'focusedValue'
  | 'locale'
  | 'getRootNode'
  | 'open.controlled';

export interface CreateDatePickerProps extends Omit<datePicker.Context, Omitted> {
  id?: string | null;
  min?: string | Date;
  max?: string | Date;
  value?: string[] | Date[];
  focusedValue?: string | Date;
  defaultOpen?: boolean;
}

export interface CreateDatePickerReturn extends datePicker.Api {}

export function createDatePicker(props: CreateDatePickerProps): CreateDatePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    datePicker.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      min: props.min ? datePicker.parse(props.min) : undefined,
      max: props.max ? datePicker.parse(props.max) : undefined,
      value: props.value ? datePicker.parse(props.value) : undefined,
      focusedValue: props.focusedValue ? datePicker.parse(props.focusedValue) : undefined,
      open: props.defaultOpen,
      'open.controlled': props.open != null,
      locale: locale?.locale,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => datePicker.connect(state, send, normalizeProps)));

  return api;
}
