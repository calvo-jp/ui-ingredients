import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateQRCodeProps extends Omit<qrCode.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateQRCodeReturn extends qrCode.Api {}

export function createQRCode(props: CreateQRCodeProps): CreateQRCodeReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    qrCode.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => qrCode.connect(state, send, normalizeProps)));

  return api;
}
