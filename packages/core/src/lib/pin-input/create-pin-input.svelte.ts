import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import type {HtmlProps} from '$lib/types.js';
import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import type {HTMLButtonAttributes} from 'svelte/elements';

export interface CreatePinInputProps
  extends Omit<pinInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreatePinInputReturn extends pinInput.Api {
  getClearTriggerProps(): HTMLButtonAttributes;
}

export function createPinInputContext(
  props: CreatePinInputProps,
): CreatePinInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: pinInput.Context = reflect(() => ({
    id,
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
