import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as toggleGroup from '@zag-js/toggle-group';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateToggleGroupProps
  extends Omit<toggleGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateToggleGroupReturn extends toggleGroup.Api {}

export function createToggleGroup(
  props: CreateToggleGroupProps,
): CreateToggleGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: toggleGroup.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(toggleGroup.machine, context);

  return reflect(() => toggleGroup.connect(service, normalizeProps));
}
