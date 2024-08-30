import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateDialogProps
  extends Omit<
    dialog.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string | null;
  defaultOpen?: boolean;
}

export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: CreateDialogProps): CreateDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    dialog.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    }),
  );

  const api = $derived(
    reflect(() => dialog.connect(state, send, normalizeProps)),
  );

  return api;
}
