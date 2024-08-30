import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timePicker from '@zag-js/time-picker';
import {uid} from 'uid';

export interface CreateTimePickerProps
  extends Omit<
    timePicker.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateTimePickerReturn extends timePicker.Api {}

export function createTimePicker(
  props: CreateTimePickerProps,
): CreateTimePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    timePicker.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      locale: props.locale ?? locale?.locale,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.defaultOpen != null,
    }),
  );

  const api = $derived(
    reflect(() => timePicker.connect(state, send, normalizeProps)),
  );

  return api;
}
