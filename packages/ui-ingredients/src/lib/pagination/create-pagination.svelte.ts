import * as pagination from '@zag-js/pagination';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreatePaginationProps
  extends Omit<pagination.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreatePaginationReturn extends pagination.Api {}

export function createPagination(
  props: CreatePaginationProps,
): CreatePaginationReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: pagination.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(pagination.machine, context);

  return reflect(() => pagination.connect(service, normalizeProps));
}
