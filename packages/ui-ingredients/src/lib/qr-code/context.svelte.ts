import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateQRCodeContextProps extends qrCode.Context {}
export interface CreateQRCodeContextReturn
  extends ReturnType<typeof createQRCodeContext> {}

export function createQRCodeContext(props: CreateQRCodeContextProps) {
  const [state, send] = useMachine(qrCode.machine(props));

  const api = $derived(
    reflect(() => qrCode.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setQRCodeContext(value: CreateQRCodeContextReturn) {
  setContext('QRCode', value);
}

export function useQRCodeContext() {
  return getContext<CreateQRCodeContextReturn>('QRCode');
}
