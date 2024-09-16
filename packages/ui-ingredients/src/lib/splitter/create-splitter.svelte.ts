import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as splitter from '@zag-js/splitter';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

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

  const context: splitter.Context = reflect(() => ({
    ...props,
    id: props.id ?? uid(),
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(splitter.machine(context), {context});

  return reflect(() => splitter.connect(state, send, normalizeProps));
}
