import * as pagination from '@zag-js/pagination';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreatePaginationContextProps extends pagination.Context {}
export interface CreatePaginationContextReturn
  extends ReturnType<typeof createPaginationContext> {}

export function createPaginationContext(props: CreatePaginationContextProps) {
  const [state, send] = useMachine(pagination.machine(props));

  const api = $derived(
    reflect(() => pagination.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setPaginationContext(value: CreatePaginationContextReturn) {
  setContext('Pagination', value);
}

export function usePaginationContext() {
  return getContext<CreatePaginationContextReturn>('Pagination');
}
