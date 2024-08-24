import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateQRCodeProps extends qrCode.Context {}
export interface CreateQRCodeReturn extends qrCode.Api {}

export function createQRCode(props: CreateQRCodeProps): CreateQRCodeReturn {
  const [state, send] = useMachine(qrCode.machine(props));

  const api = $derived(reflect(() => qrCode.connect(state, send, normalizeProps)));

  return api;
}
