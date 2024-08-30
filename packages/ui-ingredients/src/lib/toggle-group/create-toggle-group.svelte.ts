import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as toggleGroup from '@zag-js/toggle-group';
import {uid} from 'uid';

export interface CreateToggleGroupProps
  extends Omit<toggleGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateToggleGroupReturn extends toggleGroup.Api {}

export function createToggleGroup(
  props: CreateToggleGroupProps,
): CreateToggleGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    toggleGroup.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => toggleGroup.connect(state, send, normalizeProps)),
  );

  return api;
}
