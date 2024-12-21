import {normalizeProps, reflect, useActor} from 'zagjs-legacy-svelte';
import * as toast from 'zagjs-legacy-toast';

export interface CreateToastProps extends toast.Service {}
export interface CreateToastReturn extends toast.Api {}

export function createToast(props: CreateToastProps): CreateToastReturn {
  const [state, send] = useActor(props);

  return reflect(() => toast.connect(state, send, normalizeProps));
}
