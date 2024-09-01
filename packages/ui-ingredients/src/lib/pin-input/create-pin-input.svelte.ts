import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import type {HTMLProps} from '$lib/types.js';
import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreatePinInputProps
  extends Omit<pinInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreatePinInputReturn extends pinInput.Api {
  getClearTriggerProps(): HTMLProps<'button'>;
}

export function createPinInputContext(
  props: CreatePinInputProps,
): CreatePinInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    pinInput.machine({
      ids: {
        label: field?.ids.label,
        hiddenInput: field?.ids.control,
      },
      invalid: field?.invalid,
      required: field?.required,
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => {
      const o = pinInput.connect(state, send, normalizeProps);

      return {
        ...o,
        getClearTriggerProps(): HTMLProps<'button'> {
          return {
            onclick() {
              o.clearValue();
            },
          };
        },
      };
    }),
  );

  return api;
}
