import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as toggleGroup from '@zag-js/toggle-group';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateToggleGroupProps
  extends Omit<toggleGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateToggleGroupReturn extends toggleGroup.Api {}

export function createToggleGroup(
  props: CreateToggleGroupProps,
): CreateToggleGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(toggleGroup.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => toggleGroup.connect(service, normalizeProps));
}
