import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import type {GenericObject} from '$lib/types.js';
import * as datePicker from '@zag-js/date-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import type {HTMLAttributes} from 'svelte/elements';
import {parts} from './date-picker-anatomy.js';

type Omitted = 'id' | 'dir' | 'getRootNode' | 'open.controlled';

export interface CreateDatePickerProps
  extends Omit<datePicker.Context, Omitted> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateDatePickerReturn extends datePicker.Api {
  getViewProps(props: datePicker.ViewProps): HTMLAttributes<HTMLElement>;
}

export function createDatePicker(
  props: CreateDatePickerProps,
): CreateDatePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: datePicker.Context = $derived.by(() => ({
    id,
    dir: locale?.dir,
    locale: locale?.locale,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send, service] = useMachine(datePicker.machine(context));

  $effect(() => {
    service.setContext(context);
  });

  return reflect(() => {
    const o = datePicker.connect(state, send, normalizeProps);

    return {
      ...o,
      getViewProps(props: datePicker.ViewProps): GenericObject {
        return {
          ...parts.view.attrs,
          hidden: o.view !== props.view,
        };
      },
    };
  });
}
