import {normalizeProps, reflect} from 'zagjs-legacy-svelte';
import * as toast from 'zagjs-legacy-toast';
import {createUniqueId} from '../create-unique-id.js';

export interface CreateToasterProps
  extends Omit<
    Partial<toast.GroupMachineContext>,
    'id' | 'dir' | 'getRootNode'
  > {
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
