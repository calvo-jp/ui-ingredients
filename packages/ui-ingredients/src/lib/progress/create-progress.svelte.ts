import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as progress from '@zag-js/progress';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateProgressProps
  extends Omit<progress.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateProgressReturn extends progress.Api<any> {}

export function createProgress(
  props: CreateProgressProps,
): CreateProgressReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: progress.Context = $derived(
    reflect(() => ({
      ...props,
      id: props.id ?? id,
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    })),
  );

  const [state, send] = useMachine(progress.machine(context), {context});

  const api = $derived(
    reflect(() => progress.connect(state, send, normalizeProps)),
  );

  return api;
}
