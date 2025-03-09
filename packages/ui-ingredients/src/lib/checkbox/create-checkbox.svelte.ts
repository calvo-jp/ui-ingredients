import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateCheckboxProps
  extends Omit<checkbox.Props, 'dir' | 'getRootNode'> {}

export interface CreateCheckboxReturn extends checkbox.Api {}

export function createCheckbox(
  props: CreateCheckboxProps,
): CreateCheckboxReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(checkbox.machine, () => ({
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = checkbox.connect(service, normalizeProps);

    return {
      ...api,
      getHiddenInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...api.getHiddenInputProps(),
        };
      },
    };
  });
}
