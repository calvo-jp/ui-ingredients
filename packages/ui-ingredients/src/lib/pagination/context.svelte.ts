import {Context} from '$lib/context.svelte.js';
import type {CreatePaginationReturn} from './create-pagination.svelte.js';

export const paginationContext = new Context<CreatePaginationReturn>(
  'Pagination',
);
