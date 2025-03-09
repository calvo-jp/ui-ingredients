import * as splitter from '@zag-js/splitter';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateSplitterProps
  extends Omit<splitter.Props, 'dir' | 'getRootNode'> {}

export interface CreateSplitterReturn extends splitter.Api {}

export function createSplitter(
  props: CreateSplitterProps,
): CreateSplitterReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(splitter.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => splitter.connect(service, normalizeProps));
}
