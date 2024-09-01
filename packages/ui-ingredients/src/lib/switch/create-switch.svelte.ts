import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch$ from '@zag-js/switch';
import {uid} from 'uid';

export interface CreateSwitchProps
  extends Omit<switch$.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSwitchReturn extends switch$.Api {}

export function createSwitch(props: CreateSwitchProps) {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    switch$.machine({
      ids: {
        label: field?.ids.label,
        hiddenInput: field?.ids.control,
      },
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      invalid: field?.invalid,
      required: field?.required,
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => switch$.connect(state, send, normalizeProps)),
  );

  return api;
}
