import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

type Omitted = 'id' | 'dir' | 'getRootNode' | 'open.controlled';

export interface CreateComboboxProps extends Omit<combobox.Context, Omitted> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox(
  props: CreateComboboxProps,
): CreateComboboxReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: combobox.Context = reflect(() => ({
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
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send, service] = useMachine(combobox.machine(context));

  $effect(() => {
    service.setContext(context);
  });

  return reflect(() => {
    const o = combobox.connect(state, send, normalizeProps);

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
