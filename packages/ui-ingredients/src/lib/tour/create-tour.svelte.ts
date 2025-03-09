import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tour from '@zag-js/tour';
import type {HTMLButtonAttributes} from 'svelte/elements';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import type {Optional} from '../types.js';
import {parts} from './tour-anatomy.js';

export interface TourStepDetails extends Optional<tour.StepDetails, 'id'> {}

export interface ElementIds extends tour.ElementIds {
  trigger?: string;
}

export interface CreateTourProps
  extends Omit<tour.Props, 'ids' | 'dir' | 'steps' | 'getRootNode'> {
  ids?: ElementIds;
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

  const service = useMachine(tour.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
    steps,
  }));

  return reflect(() => {
    const api = tour.connect(service, normalizeProps);

    return {
      ...api,
      getTriggerProps() {
        return {
          id: `tour:${props.id}:trigger`,
          onclick() {
            api.start();
          },
          'data-state': api.open ? 'open' : 'closed',
          ...parts.trigger.attrs,
        };
      },
    };
  });
}
