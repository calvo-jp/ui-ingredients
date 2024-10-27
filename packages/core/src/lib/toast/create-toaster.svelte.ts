import {createUniqueId} from '$lib/create-unique-id.js';
import type {Machine, StateMachine} from '@zag-js/core';
import {normalizeProps, reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';

export interface CreateToasterProps {
  id?: string;
  max?: toast.GroupMachineContext['max'];
  gap?: toast.GroupMachineContext['gap'];
  hotkey?: toast.GroupMachineContext['hotkey'];
  offsets?: toast.GroupMachineContext['offsets'];
  overlap?: toast.GroupMachineContext['overlap'];
  duration?: toast.GroupMachineContext['duration'];
  placement?: toast.GroupMachineContext['placement'];
  removeDelay?: toast.GroupMachineContext['removeDelay'];
  pauseOnPageIdle?: toast.GroupMachineContext['pauseOnPageIdle'];
}

type ToasterMachineState = {value: 'stack' | 'overlap'};
type ToasterMachine = Machine<
  toast.GroupMachineContext,
  ToasterMachineState,
  StateMachine.AnyEventObject
>;

export interface CreateToasterReturn extends toast.GroupApi {
  machine: ToasterMachine;
}

export function createToaster(props?: CreateToasterProps): CreateToasterReturn {
  const id = createUniqueId();
  const machine = $derived(toast.group.machine({id, ...props}));

  return reflect(() => ({
    machine,
    ...toast.group.connect(machine, machine.send, normalizeProps),
  }));
}
