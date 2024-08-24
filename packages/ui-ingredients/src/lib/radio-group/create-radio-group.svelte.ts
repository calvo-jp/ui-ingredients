import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateRadioGroupProps
  extends Omit<radioGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(props: CreateRadioGroupProps): CreateRadioGroupReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    radioGroup.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => radioGroup.connect(state, send, normalizeProps)));

  return api;
}
