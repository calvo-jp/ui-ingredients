import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateClipboardProps
  extends Omit<clipboard.Context, 'id' | 'getRootNode'> {
  id?: string;
}

export interface CreateClipboardReturn extends clipboard.Api {}

export function createClipboard(
  props: CreateClipboardProps,
): CreateClipboardReturn {
  const environment = getEnvironmentContext();

  const id = uid();

  const context: clipboard.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(clipboard.machine(context), {context});

  return reflect(() => clipboard.connect(state, send, normalizeProps));
}
