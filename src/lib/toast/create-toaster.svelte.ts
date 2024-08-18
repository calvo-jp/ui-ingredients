import {normalizeProps, useMachine} from '@zag-js/svelte';
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

export function createToaster(props?: CreateToasterProps): toast.GroupApi {
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

  const api = $derived(toast.group.connect(state, send, normalizeProps));

  return {
    create: api.create,
    success: api.success,
    error: api.error,
    promise: api.promise,
    loading: api.loading,
    pause: api.pause,
    resume: api.resume,
    update: api.update,
    upsert: api.upsert,
    remove: api.remove,
    dismiss: api.dismiss,
    dismissByPlacement: api.dismissByPlacement,
    subscribe: api.subscribe,
    isVisible: api.isVisible,
    getCount: api.getCount,
    getGroupProps: api.getGroupProps,
    getPlacements: api.getPlacements,
    getToastsByPlacement: api.getToastsByPlacement,
  };
}
