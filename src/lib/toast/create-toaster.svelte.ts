import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
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

export default function createToaster(props?: CreateToasterProps): toast.GroupApi {
  const id = $derived(props?.id ?? nanoid());

  const [state, send] = useMachine(
    toast.group.machine({
      duration: 5000,
      placement: 'bottom',
      removeDelay: 0,
      ...props,
      id,
    }),
  );

  const api = $derived(reflect(() => toast.group.connect(state, send, normalizeProps)));

  return api;
}
