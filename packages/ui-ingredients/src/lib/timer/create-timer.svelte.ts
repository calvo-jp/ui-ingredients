import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';

export interface CreateTimerProps
  extends Omit<timer.Context, 'id' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: CreateTimerProps): CreateTimerReturn {
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    timer.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => timer.connect(state, send, normalizeProps)),
  );

  return api;
}
