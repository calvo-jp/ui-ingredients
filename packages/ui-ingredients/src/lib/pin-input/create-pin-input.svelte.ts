import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreatePinInputProps
  extends Omit<pinInput.Props, 'dir' | 'getRootNode'> {}

export interface CreatePinInputReturn extends pinInput.Api {}

export function createPinInputContext(
  props: CreatePinInputProps,
): CreatePinInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(pinInput.machine, () => ({
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    invalid: field?.invalid,
    required: field?.required,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = pinInput.connect(service, normalizeProps);

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
