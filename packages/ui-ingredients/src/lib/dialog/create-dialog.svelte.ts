import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateDialogProps
  extends Omit<
    dialog.Context,
    'id' | 'dir' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: CreateDialogProps): CreateDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: dialog.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
  }));

  const [state, send] = useMachine(dialog.machine(context), {context});

  return reflect(() => dialog.connect(state, send, normalizeProps));
}
