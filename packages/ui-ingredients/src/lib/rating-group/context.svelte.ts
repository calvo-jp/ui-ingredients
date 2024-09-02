import {createContext} from '$lib/create-context.svelte.js';
import type {CreateRatingGroupReturn} from './create-rating-group.svelte.js';

export const [getRatingGroupContext, setRatingGroupContext] =
  createContext<CreateRatingGroupReturn>('RatingGroup');
