import * as progress from '@zag-js/progress';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateProgressProps
  extends Omit<progress.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateProgressReturn extends progress.Api<any> {}

export function createProgress(
  props: CreateProgressProps,
): CreateProgressReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: progress.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(progress.machine, context);

  return reflect(() => progress.connect(service, normalizeProps));
}
