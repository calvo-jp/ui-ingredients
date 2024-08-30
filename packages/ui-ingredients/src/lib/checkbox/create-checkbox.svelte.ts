import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateCheckboxProps
  extends Omit<checkbox.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateCheckboxReturn extends checkbox.Api {}

export function createCheckbox(
  props: CreateCheckboxProps,
): CreateCheckboxReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    checkbox.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => checkbox.connect(state, send, normalizeProps)),
  );

  return api;
}
