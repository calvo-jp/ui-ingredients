import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tour from '@zag-js/tour';
import type {HTMLButtonAttributes} from 'svelte/elements';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
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

  const id = createUniqueId();

  const steps = $derived.by(() => {
    return props.steps?.map((step) => ({
      id: createUniqueId(),
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
