import {normalizeProps, reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';
import {nanoid} from 'nanoid/non-secure';

export interface CreateToasterProps {
  id?: string;
  dir?: toast.GroupMachineContext['dir'];
  max?: toast.GroupMachineContext['max'];
  gap?: toast.GroupMachineContext['gap'];
  hotkey?: toast.GroupMachineContext['hotkey'];
  offsets?: toast.GroupMachineContext['offsets'];
  overlap?: toast.GroupMachineContext['overlap'];
  duration?: toast.GroupMachineContext['duration'];
  placement?: toast.GroupMachineContext['placement'];
  removeDelay?: toast.GroupMachineContext['removeDelay'];
  pauseOnPageIdle?: toast.GroupMachineContext['pauseOnPageIdle'];
  getRootNode?: toast.GroupMachineContext['getRootNode'];
}

export interface CreateToasterReturn extends ReturnType<typeof createToaster> {}

export default function createToaster(props?: CreateToasterProps) {
  const id = $derived(props?.id ?? nanoid());

  const machine = $derived(
    toast.group.machine({
      max: 5,
      overlap: false,
      duration: 5000,
      placement: 'bottom',
      removeDelay: 0,
      ...props,
      id,
    }),
  );

  const api = $derived(
    reflect(() => ({
      machine,
      ...toast.group.connect(machine, machine.send, normalizeProps),
    })),
  );

  return api;
}
