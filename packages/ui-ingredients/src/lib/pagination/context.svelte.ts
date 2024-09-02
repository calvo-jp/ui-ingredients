import {createContext} from '$lib/create-context.svelte.js';
import type {CreatePaginationReturn} from './create-pagination.svelte.js';

export const [getPaginationContext, setPaginationContext] =
  createContext<CreatePaginationReturn>('Pagination');
