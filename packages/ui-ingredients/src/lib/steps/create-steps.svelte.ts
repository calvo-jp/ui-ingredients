import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateStepsProps
  extends Omit<steps.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: CreateStepsProps): CreateStepsReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: steps.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(steps.machine, context);

  return reflect(() => steps.connect(service, normalizeProps));
}
