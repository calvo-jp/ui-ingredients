import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tour from '@zag-js/tour';
import type {HTMLButtonAttributes} from 'svelte/elements';
import {uid} from 'uid';
import {parts} from './tour-anatomy.js';

export interface TourStepDetails extends Omit<tour.StepDetails, 'id'> {}

export interface CreateTourProps
  extends Omit<tour.Context, 'id' | 'dir' | 'steps' | 'getRootNode'> {
  id?: string;
  steps?: TourStepDetails[];
}

export interface CreateTourReturn extends tour.Api<any> {
  getTriggerProps(): HTMLButtonAttributes;
}

export function createTour(props: CreateTourProps): CreateTourReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const steps = $derived.by(() => {
    return props.steps?.map((step) => ({
      id: uid(),
      ...step,
    }));
  });

  const context: tour.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
    steps,
  }));

  const [state, send] = useMachine(tour.machine(context), {context});

  return reflect(() => {
    const o = tour.connect(state, send, normalizeProps);

    return {
      ...o,
      getTriggerProps() {
        return {
          onclick() {
            o.start();
          },
          'data-state': o.open ? 'open' : 'closed',
          ...parts.trigger.attrs,
        };
      },
    };
  });
}
