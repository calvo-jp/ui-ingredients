import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';

export interface CreateTimerProps
  extends Omit<timer.Context, 'id' | 'getRootNode'> {
  id?: string;
}

export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: CreateTimerProps): CreateTimerReturn {
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: timer.Context = reflect(() => ({
    id,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(timer.machine(context), {context});

  return reflect(() => timer.connect(state, send, normalizeProps));
}
