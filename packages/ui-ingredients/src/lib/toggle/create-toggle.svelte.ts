import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as toggle from '@zag-js/toggle';

export interface CreateToggleProps extends toggle.Props {}
export interface CreateToggleReturn extends toggle.Api {}

export function createToggle(props: CreateToggleProps) {
  const service = useMachine(toggle.machine, props);
  return reflect(() => toggle.connect(service, normalizeProps));
}
