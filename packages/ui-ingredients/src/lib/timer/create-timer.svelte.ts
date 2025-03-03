import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';

export interface CreateTimerProps extends Omit<timer.Props, 'getRootNode'> {}
export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: CreateTimerProps): CreateTimerReturn {
  const environment = getEnvironmentContext();

  const context: timer.Props = reflect(() => ({
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(timer.machine, context);

  return reflect(() => timer.connect(service, normalizeProps));
}
