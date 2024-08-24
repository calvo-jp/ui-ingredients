import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateStepsProps extends Omit<steps.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: CreateStepsProps) {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    steps.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => steps.connect(state, send, normalizeProps)));

  return api;
}
