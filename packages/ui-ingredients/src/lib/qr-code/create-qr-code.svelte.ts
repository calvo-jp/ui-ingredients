import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateQrCodeProps
  extends Omit<qrCode.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateQrCodeReturn extends qrCode.Api {}

export function createQRCode(props: CreateQrCodeProps): CreateQrCodeReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: qrCode.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const [state, send] = useMachine(qrCode.machine(context), {context});

  return reflect(() => qrCode.connect(state, send, normalizeProps));
}
