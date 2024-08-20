import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateRatingGroupContextProps extends ratingGroup.Context {}
export interface CreateRatingGroupContextReturn
  extends ReturnType<typeof createRatingGroupContext> {}

export function createRatingGroupContext(props: CreateRatingGroupContextProps) {
  const [state, send] = useMachine(ratingGroup.machine(props));

  const api = $derived(reflect(() => ratingGroup.connect(state, send, normalizeProps)));

  return api;
}

export function setRatingGroupContext(value: CreateRatingGroupContextReturn) {
  setContext('RatingGroup', value);
}

export function useRatingGroupContext() {
  return getContext<CreateRatingGroupContextReturn>('RatingGroup');
}

export function setRatingGroupItemContext(value: ratingGroup.ItemProps) {
  setContext('RatingGroupItem', value);
}

export function useRatingGroupItemContext() {
  return getContext<ratingGroup.ItemProps>('RatingGroupItem');
}
