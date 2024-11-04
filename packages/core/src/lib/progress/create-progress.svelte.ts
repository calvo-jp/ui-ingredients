import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as progress from '@zag-js/progress';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateProgressProps
  extends Omit<progress.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateProgressReturn extends progress.Api<any> {}

export function createProgress(
  props: CreateProgressProps,
): CreateProgressReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: progress.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(progress.machine(context), {context});

  return reflect(() => progress.connect(state, send, normalizeProps));
}