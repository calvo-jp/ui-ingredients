import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateStepsProps
  extends Omit<steps.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: CreateStepsProps): CreateStepsReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: steps.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(steps.machine(context), {context});

  return reflect(() => steps.connect(state, send, normalizeProps));
}
