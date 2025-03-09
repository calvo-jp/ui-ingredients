import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateStepsProps
  extends Omit<steps.Props, 'dir' | 'getRootNode'> {}

export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: CreateStepsProps): CreateStepsReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(steps.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => steps.connect(service, normalizeProps));
}
