import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateDialogProps
  extends Omit<dialog.Props, 'id' | 'dir' | 'role' | 'getRootNode'> {
  id?: string;
}

export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: CreateDialogProps): CreateDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: dialog.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    role: 'dialog',
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(dialog.machine, context);

  return reflect(() => dialog.connect(service, normalizeProps));
}
