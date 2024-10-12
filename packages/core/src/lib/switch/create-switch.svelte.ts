import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch_ from '@zag-js/switch';

export interface CreateSwitchProps
  extends Omit<switch_.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateSwitchReturn extends switch_.Api {}

export function createSwitch(props: CreateSwitchProps): CreateSwitchReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: switch_.Context = reflect(() => ({
    id,
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

  const [state, send] = useMachine(switch_.machine(context), {context});

  return reflect(() => {
    const o = switch_.connect(state, send, normalizeProps);

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
