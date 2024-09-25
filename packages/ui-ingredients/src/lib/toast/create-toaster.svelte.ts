import type {Machine, StateMachine} from '@zag-js/core';
import {normalizeProps, reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';
import {uid} from 'uid';

export interface CreateToasterProps {
  id?: string | null;
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

export interface CreateToasterReturn extends toast.GroupApi {
  machine: Machine<
    toast.GroupMachineContext<any>,
    {value: 'stack' | 'overlap'},
    StateMachine.AnyEventObject
  >;
}

export function createToaster(props?: CreateToasterProps) {
  const id_ = uid();
  const id = $derived(props?.id ?? id_);

  const machine = $derived(toast.group.machine({...props, id}));

  return reflect(() => ({
    machine,
    ...toast.group.connect(machine, machine.send, normalizeProps),
  }));
}
