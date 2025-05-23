import {createContext} from '../create-context.svelte.js';
import {type CreateTourReturn} from './create-tour.svelte.js';

export const [getTourContext, setTourContext] =
  createContext<CreateTourReturn>('Tour');
