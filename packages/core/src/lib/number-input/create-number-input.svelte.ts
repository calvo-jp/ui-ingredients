import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as numberInput from '@zag-js/number-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateNumberInputProps
  extends Omit<numberInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateNumberInputReturn extends numberInput.Api {}

export function createNumberInput(
  props: CreateNumberInputProps,
): CreateNumberInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: numberInput.Context = reflect(() => ({
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    locale: props.locale ?? locale?.locale,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(numberInput.machine(context), {context});

  return reflect(() => {
    const o = numberInput.connect(state, send, normalizeProps);

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
