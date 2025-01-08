export * as Pagination from './pagination.js';

export type {PaginationEllipsisProps} from './pagination-ellipsis.svelte';
export type {PaginationItemProps} from './pagination-item.svelte';
export type {PaginationNextTriggerProps} from './pagination-next-trigger.svelte';
export type {PaginationPrevTriggerProps} from './pagination-prev-trigger.svelte';
export type {PaginationProps} from './pagination-root.svelte';

export {
  createPagination,
  type CreatePaginationProps,
  type CreatePaginationReturn,
} from './create-pagination.svelte.js';
export {anatomy as paginationAnatomy} from './pagination-anatomy.js';
export {
  getPaginationContext,
  setPaginationContext,
} from './pagination-context.svelte.js';
