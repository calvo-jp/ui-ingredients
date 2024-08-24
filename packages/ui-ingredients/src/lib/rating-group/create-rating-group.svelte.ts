import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateRatingGroupProps extends ratingGroup.Context {}
export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(props: CreateRatingGroupProps): CreateRatingGroupReturn {
  const [state, send] = useMachine(ratingGroup.machine(props));

  const api = $derived(reflect(() => ratingGroup.connect(state, send, normalizeProps)));

  return api;
}
