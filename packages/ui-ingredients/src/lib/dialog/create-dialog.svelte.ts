import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateDialogProps
  extends Omit<dialog.Props, 'dir' | 'role' | 'getRootNode'> {}

export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: CreateDialogProps): CreateDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(
    dialog.machine,
    (): dialog.Props => ({
      dir: locale?.dir,
      role: 'dialog',
      getRootNode: environment?.getRootNode,
      ...props,
    }),
  );

  return reflect(() => dialog.connect(service, normalizeProps));
}
