import * as datePicker from '@zag-js/date-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateDatePickerContextProps extends datePicker.Context {}
export interface CreateDatePickerContextReturn
  extends ReturnType<typeof createDatePickerContext> {}

export function createDatePickerContext(props: CreateDatePickerContextProps) {
  const [state, send] = useMachine(datePicker.machine(props));

  const api = $derived(
    reflect(() => datePicker.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setDatePickerContext(value: CreateDatePickerContextReturn) {
  setContext('DatePicker', value);
}

export function useDatePickerContext() {
  return getContext<CreateDatePickerContextReturn>('DatePicker');
}
