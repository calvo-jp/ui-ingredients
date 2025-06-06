import * as passwordInput from '@zag-js/password-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreatePasswordInputProps
  extends Omit<passwordInput.Props, 'dir' | 'getRootNode'> {}

export interface CreatePasswordInputReturn extends passwordInput.Api {}

export function createPasswordInputContext(
  props: CreatePasswordInputProps,
): CreatePasswordInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(passwordInput.machine, () => ({
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    invalid: field?.invalid,
    required: field?.required,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = passwordInput.connect(service, normalizeProps);

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
