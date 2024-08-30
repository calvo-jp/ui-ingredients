import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateQRCodeProps
  extends Omit<qrCode.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateQRCodeReturn extends qrCode.Api {}

export function createQRCode(props: CreateQRCodeProps): CreateQRCodeReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    qrCode.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => qrCode.connect(state, send, normalizeProps)),
  );

  return api;
}
