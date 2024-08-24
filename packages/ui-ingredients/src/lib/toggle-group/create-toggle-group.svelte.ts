import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as toggleGroup from '@zag-js/toggle-group';

export interface CreateToggleGroupProps extends toggleGroup.Context {}
export interface CreateToggleGroupReturn extends toggleGroup.Api {}

export function createToggleGroup(props: CreateToggleGroupProps): CreateToggleGroupReturn {
  const [state, send] = useMachine(toggleGroup.machine(props));

  const api = $derived(reflect(() => toggleGroup.connect(state, send, normalizeProps)));

  return api;
}
