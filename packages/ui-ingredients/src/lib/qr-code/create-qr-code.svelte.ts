import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateQrCodeProps
  extends Omit<qrCode.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateQrCodeReturn extends qrCode.Api {}

export function createQRCode(props: CreateQrCodeProps): CreateQrCodeReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: qrCode.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(qrCode.machine(context), {context});

  return reflect(() => qrCode.connect(state, send, normalizeProps));
}
