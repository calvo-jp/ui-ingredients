import {normalizeProps, reflect, useActor} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';

export interface CreateToastProps extends toast.Service {}
export interface CreateToastReturn extends toast.Api {}

export function createToast(props: CreateToastProps) {
  const [state, send] = useActor(props);

  return reflect(() => toast.connect(state, send, normalizeProps));
}
