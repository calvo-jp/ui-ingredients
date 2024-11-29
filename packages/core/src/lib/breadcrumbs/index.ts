export * as Breadcrumbs from './breadcrumbs.js';

export type {BreadcrumbsItemProps} from './breadcrumbs-item.svelte';
export type {BreadcrumbsLinkProps} from './breadcrumbs-link.svelte';
export type {BreadcrumbsListProps} from './breadcrumbs-list.svelte';
export type {BreadcrumbsProps} from './breadcrumbs-root.svelte';
export type {BreadcrumbsSeparatorProps} from './breadcrumbs-separator.svelte';

export {anatomy as breadcrumbsAnatomy} from './breadcrumbs-anatomy.js';
export {
  getBreadcrumbsContext,
  setBreadcrumbsContext,
} from './breadcrumbs-context.svelte.js';
export {
  createBreadcrumbs,
  type CreateBreadcrumbsReturn,
} from './create-breadcrumbs.js';
