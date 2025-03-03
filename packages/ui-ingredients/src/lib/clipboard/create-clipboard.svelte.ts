import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';

export interface CreateClipboardProps
  extends Omit<clipboard.Props, 'getRootNode'> {}

export interface CreateClipboardReturn extends clipboard.Api {}

export function createClipboard(
  props: CreateClipboardProps,
): CreateClipboardReturn {
  const environment = getEnvironmentContext();

  const context: clipboard.Props = reflect(() => ({
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(clipboard.machine, context);

  return reflect(() => clipboard.connect(service, normalizeProps));
}
