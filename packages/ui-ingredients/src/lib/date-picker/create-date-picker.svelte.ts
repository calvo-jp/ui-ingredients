import * as datePicker from '@zag-js/date-picker';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import type {HTMLAttributes} from 'svelte/elements';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import type {GenericObject} from '../types.js';
import {parts} from './date-picker-anatomy.js';

export interface CreateDatePickerProps
  extends Omit<datePicker.Props, 'dir' | 'getRootNode'> {}

export interface CreateDatePickerReturn extends datePicker.Api {
  getViewProps(props: datePicker.ViewProps): HTMLAttributes<HTMLElement>;
}

export function createDatePicker(
  props: CreateDatePickerProps,
): CreateDatePickerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: datePicker.Props = reflect(() => ({
    dir: locale?.dir,
    locale: locale?.locale,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(datePicker.machine, context);

  return reflect(() => {
    const o = datePicker.connect(service, normalizeProps);

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
