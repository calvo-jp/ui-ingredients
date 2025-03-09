import * as pagination from '@zag-js/pagination';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreatePaginationProps
  extends Omit<pagination.Props, 'dir' | 'getRootNode'> {}

export interface CreatePaginationReturn extends pagination.Api {}

export function createPagination(
  props: CreatePaginationProps,
): CreatePaginationReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(pagination.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => pagination.connect(service, normalizeProps));
}
