import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as pagination from '@zag-js/pagination';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreatePaginationProps
  extends Omit<pagination.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreatePaginationReturn extends pagination.Api {}

export function createPagination(
  props: CreatePaginationProps,
): CreatePaginationReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    pagination.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => pagination.connect(state, send, normalizeProps)),
  );

  return api;
}
