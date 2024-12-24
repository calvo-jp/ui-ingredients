import {createContext} from '../create-context.svelte.js';
import type {CreateBreadcrumbsReturn} from './create-breadcrumbs.js';

export const [getBreadcrumbsContext, setBreadcrumbsContext] =
  createContext<CreateBreadcrumbsReturn>('Breadcrumbs');
