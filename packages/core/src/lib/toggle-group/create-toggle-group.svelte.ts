import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as toggleGroup from '@zag-js/toggle-group';
import {uid} from 'uid';

export interface CreateToggleGroupProps
  extends Omit<toggleGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateToggleGroupReturn extends toggleGroup.Api {}

export function createToggleGroup(
  props: CreateToggleGroupProps,
): CreateToggleGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: toggleGroup.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(toggleGroup.machine(context), {context});

  return reflect(() => toggleGroup.connect(state, send, normalizeProps));
}
