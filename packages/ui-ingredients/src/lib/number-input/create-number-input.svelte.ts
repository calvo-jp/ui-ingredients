import * as numberInput from '@zag-js/number-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateNumberInputProps
  extends Omit<numberInput.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateNumberInputReturn extends numberInput.Api {}

export function createNumberInput(
  props: CreateNumberInputProps,
): CreateNumberInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: numberInput.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    locale: locale?.locale,
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(numberInput.machine, context);

  return reflect(() => {
    const o = numberInput.connect(service, normalizeProps);

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
