import type {Optional} from '$lib/types.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tour from '@zag-js/tour';
import type {HTMLButtonAttributes} from 'svelte/elements';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import {parts} from './tour-anatomy.js';

export interface TourStepDetails extends Optional<tour.StepDetails, 'id'> {}

export interface CreateTourProps
  extends Omit<tour.Props, 'dir' | 'steps' | 'getRootNode'> {
  steps?: TourStepDetails[];
}

export interface CreateTourReturn extends tour.Api<any> {
  getTriggerProps(): HTMLButtonAttributes;
}

export function createTour(props: CreateTourProps): CreateTourReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const steps = $derived.by(() => {
    return props.steps?.map((step, index) => ({
      id: `tour:${props.id}:step:${index}`,
      ...step,
    }));
  });

  const context: tour.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
    steps,
  }));

  const service = useMachine(tour.machine, context);

  return reflect(() => {
    const o = tour.connect(service, normalizeProps);

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
