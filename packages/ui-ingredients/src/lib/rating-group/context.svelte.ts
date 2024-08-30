import {Context} from '$lib/context.svelte.js';
import type {CreateRatingGroupReturn} from './create-rating-group.svelte.js';

export const ratingGroupContext = new Context<CreateRatingGroupReturn>(
  'RatingGroup',
);
