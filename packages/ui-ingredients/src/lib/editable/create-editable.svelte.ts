import * as editable from '@zag-js/editable';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateEditableProps
  extends Omit<editable.Props, 'dir' | 'getRootNode'> {}

export interface CreateEditableReturn extends editable.Api {}

export function createEditable(
  props: CreateEditableProps,
): CreateEditableReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(editable.machine, () => ({
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

  return reflect(() => {
    const api = editable.connect(service, normalizeProps);

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
