import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as splitter from '@zag-js/splitter';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSplitterProps
  extends Omit<splitter.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSplitterReturn extends splitter.Api {}

export function createSplitter(
  props: CreateSplitterProps,
): CreateSplitterReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    splitter.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => splitter.connect(state, send, normalizeProps)),
  );

  return api;
}
