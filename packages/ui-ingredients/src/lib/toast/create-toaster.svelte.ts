import {uuid} from '$lib/utils.svelte.js';
import {normalizeProps, reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';

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
  const id = $derived(props?.id ?? uuid());

  const machine = $derived(toast.group.machine({...props, id}));

  const api = $derived(
    reflect(() => ({
      machine,
      ...toast.group.connect(machine, machine.send, normalizeProps),
    })),
  );

  return api;
}