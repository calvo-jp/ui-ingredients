import * as splitter from '@zag-js/splitter';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateSplitterProps
  extends Omit<splitter.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateSplitterReturn extends splitter.Api {}

export function createSplitter(
  props: CreateSplitterProps,
): CreateSplitterReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: splitter.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(splitter.machine, context);

  return reflect(() => splitter.connect(service, normalizeProps));
}
