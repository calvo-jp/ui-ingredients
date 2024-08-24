import * as pagination from '@zag-js/pagination';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePaginationProps extends pagination.Context {}
export interface CreatePaginationReturn extends pagination.Api {}

export function createPagination(props: CreatePaginationProps): CreatePaginationReturn {
  const [state, send] = useMachine(pagination.machine(props));

  const api = $derived(reflect(() => pagination.connect(state, send, normalizeProps)));

  return api;
}
