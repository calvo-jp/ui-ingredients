import {createUniqueId} from '$lib/create-unique-id.js';
import {normalizeProps, reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';

export interface CreateToasterProps
  extends Omit<Partial<toast.GroupMachineContext>, 'id'> {
  id?: string;
  placement?: toast.Placement;
}

export interface CreateToasterReturn extends toast.GroupApi {
  machine: toast.GroupService;
}

export function createToaster(props?: CreateToasterProps): CreateToasterReturn {
  const id = createUniqueId();
  const machine = $derived(toast.group.machine({id, ...props}));

  return reflect(() => ({
    machine,
    ...toast.group.connect(machine, machine.send, normalizeProps),
  }));
}
