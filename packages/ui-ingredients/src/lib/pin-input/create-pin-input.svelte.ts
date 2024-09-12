import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import type {HtmlProps} from '$lib/types.js';
import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreatePinInputProps
  extends Omit<pinInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreatePinInputReturn extends pinInput.Api {
  getClearTriggerProps(): HtmlProps<'button'>;
}

export function createPinInputContext(
  props: CreatePinInputProps,
): CreatePinInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: pinInput.Context = reflect(() => ({
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    invalid: field?.invalid,
    required: field?.required,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(pinInput.machine(context), {context});

  return reflect(() => {
    const o = pinInput.connect(state, send, normalizeProps);

    return {
      ...o,
      getClearTriggerProps(): HtmlProps<'button'> {
        return {
          onclick() {
            o.clearValue();
          },
        };
      },
      getHiddenInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...o.getHiddenInputProps(),
        };
      },
    };
  });
}
