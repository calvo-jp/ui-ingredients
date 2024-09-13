import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch_ from '@zag-js/switch';
import {uid} from 'uid';

export interface CreateSwitchProps
  extends Omit<switch_.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSwitchReturn extends switch_.Api {}

export function createSwitch(props: CreateSwitchProps) {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: switch_.Context = reflect(() => ({
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    invalid: field?.invalid,
    required: field?.required,
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
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
