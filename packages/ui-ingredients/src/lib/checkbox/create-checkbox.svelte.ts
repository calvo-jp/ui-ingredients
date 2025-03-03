import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateCheckboxProps
  extends Omit<checkbox.Props, 'dir' | 'getRootNode'> {}

export interface CreateCheckboxReturn extends checkbox.Api {}

export function createCheckbox(
  props: CreateCheckboxProps,
): CreateCheckboxReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: checkbox.Props = reflect(() => ({
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

  const service = useMachine(checkbox.machine, context);

  return reflect(() => {
    const o = checkbox.connect(service, normalizeProps);

    return {
      ...o,
      getHiddenInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...o.getHiddenInputProps(),
        };
      },
    };
  });
}
