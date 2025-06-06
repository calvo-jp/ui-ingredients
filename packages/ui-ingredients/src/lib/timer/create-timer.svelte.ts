import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';

export interface CreateTimerProps extends Omit<timer.Props, 'getRootNode'> {}
export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: CreateTimerProps): CreateTimerReturn {
  const environment = getEnvironmentContext();

  const service = useMachine(timer.machine, () => ({
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => timer.connect(service, normalizeProps));
}
