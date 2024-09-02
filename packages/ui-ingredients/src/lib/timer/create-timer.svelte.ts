import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';
import {uid} from 'uid';

export interface CreateTimerProps
  extends Omit<timer.Context, 'id' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: CreateTimerProps): CreateTimerReturn {
  const environment = getEnvironmentContext();

  const id = uid();

  const context: timer.Context = $derived(
    reflect(() => ({
      ...props,
      id: props.id ?? id,
      getRootNode: environment?.getRootNode,
    })),
  );

  const [state, send] = useMachine(timer.machine(context), {context});

  const api = $derived(
    reflect(() => timer.connect(state, send, normalizeProps)),
  );

  return api;
}
