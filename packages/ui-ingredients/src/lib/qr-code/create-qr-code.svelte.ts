import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateQrCodeProps
  extends Omit<qrCode.Props, 'dir' | 'getRootNode'> {}

export interface CreateQrCodeReturn extends qrCode.Api {}

export function createQRCode(props: CreateQrCodeProps): CreateQrCodeReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(qrCode.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => qrCode.connect(service, normalizeProps));
}
