import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch$ from '@zag-js/switch';

export interface CreateSwitchProps extends Omit<switch$.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSwitchReturn extends switch$.Api {}

export function createSwitch(props: CreateSwitchProps) {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    switch$.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => switch$.connect(state, send, normalizeProps)));

  return api;
}
