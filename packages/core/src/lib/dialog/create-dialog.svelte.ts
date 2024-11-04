import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateDialogProps
  extends Omit<
    dialog.Context,
    'id' | 'dir' | 'role' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: CreateDialogProps): CreateDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: dialog.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    role: 'dialog',
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    ...props,
  }));

  const [state, send] = useMachine(dialog.machine(context), {context});

  return reflect(() => dialog.connect(state, send, normalizeProps));
}