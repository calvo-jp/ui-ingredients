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

  const id = uid();

  const context: pagination.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(pagination.machine(context), {context});

  return reflect(() => pagination.connect(state, send, normalizeProps));
}
