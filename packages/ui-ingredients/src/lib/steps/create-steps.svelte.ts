import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as steps from '@zag-js/steps';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateStepsProps
  extends Omit<steps.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: CreateStepsProps) {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: steps.Context = $derived(
    reflect(() => ({
      ...props,
      id: props.id ?? id,
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    })),
  );

  const [state, send] = useMachine(steps.machine(context), {context});

  const api = $derived(
    reflect(() => steps.connect(state, send, normalizeProps)),
  );

  return api;
}
