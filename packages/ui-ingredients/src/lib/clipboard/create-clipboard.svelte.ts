import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';

export interface CreateClipboardProps
  extends Omit<clipboard.Props, 'getRootNode'> {}

export interface CreateClipboardReturn extends clipboard.Api {}

export function createClipboard(
  props: CreateClipboardProps,
): CreateClipboardReturn {
  const environment = getEnvironmentContext();

  const service = useMachine(clipboard.machine, () => ({
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => clipboard.connect(service, normalizeProps));
}
