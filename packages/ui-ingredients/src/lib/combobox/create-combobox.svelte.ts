import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateComboboxProps
  extends Omit<combobox.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox(
  props: CreateComboboxProps,
): CreateComboboxReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: combobox.Props = reflect(() => ({
    id,
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
    const o = combobox.connect(service, normalizeProps);

    return {
      ...o,
      getInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...o.getInputProps(),
        };
      },
    };
  });
}
