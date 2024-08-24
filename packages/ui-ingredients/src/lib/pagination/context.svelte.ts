import {Context} from '$lib/utils.svelte.js';
import type {CreatePaginationReturn} from './create-pagination.svelte.js';

export const paginationContext = new Context<CreatePaginationReturn>('Pagination');
