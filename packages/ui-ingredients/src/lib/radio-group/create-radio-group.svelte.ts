import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateRadioGroupProps
  extends Omit<radioGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(
  props: CreateRadioGroupProps,
): CreateRadioGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    radioGroup.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => radioGroup.connect(state, send, normalizeProps)),
  );

  return api;
}
