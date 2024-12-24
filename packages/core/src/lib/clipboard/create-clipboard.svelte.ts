import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';

export interface CreateClipboardProps
  extends Omit<clipboard.Context, 'id' | 'getRootNode'> {
  id?: string;
}

export interface CreateClipboardReturn extends clipboard.Api {}

export function createClipboard(
  props: CreateClipboardProps,
): CreateClipboardReturn {
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: clipboard.Context = reflect(() => ({
    id,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(clipboard.machine(context), {context});

  return reflect(() => clipboard.connect(state, send, normalizeProps));
}
