import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch_ from '@zag-js/switch';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateSwitchProps
  extends Omit<switch_.Props, 'dir' | 'getRootNode'> {}

export interface CreateSwitchReturn extends switch_.Api {}

export function createSwitch(props: CreateSwitchProps): CreateSwitchReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(switch_.machine, () => ({
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    invalid: field?.invalid,
    required: field?.required,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = switch_.connect(service, normalizeProps);

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
