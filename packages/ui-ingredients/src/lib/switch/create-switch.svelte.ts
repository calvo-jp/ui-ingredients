import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as switch$ from '@zag-js/switch';

export interface CreateSwitchProps extends switch$.Context {}
export interface CreateSwitchReturn extends switch$.Api {}

export function createSwitch(props: CreateSwitchProps) {
  const [state, send] = useMachine(switch$.machine(props));

  const api = $derived(reflect(() => switch$.connect(state, send, normalizeProps)));

  return api;
}
