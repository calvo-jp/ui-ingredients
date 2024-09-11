import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tour from '@zag-js/tour';
import {uid} from 'uid';

export interface CreateTourProps
  extends Omit<tour.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTourReturn extends tour.Api<any> {}

export function createTour(props: CreateTourProps): CreateTourReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: tour.Context = $derived(
    reflect(() => ({
      id: props.id ?? id,
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    })),
  );

  const [state, send] = useMachine(tour.machine(context), {context});

  const api = $derived(
    reflect(() => tour.connect(state, send, normalizeProps)),
  );

  return api;
}
