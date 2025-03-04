import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateComboboxProps
  extends Omit<combobox.Props, 'dir' | 'getRootNode'> {}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox(
  props: CreateComboboxProps,
): CreateComboboxReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: combobox.Props = reflect(() => ({
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    dir: locale?.dir,
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(combobox.machine, context);

  return reflect(() => {
    const api = combobox.connect(service, normalizeProps);

    return {
      ...api,
      getInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...api.getInputProps(),
        };
      },
    };
  });
}
