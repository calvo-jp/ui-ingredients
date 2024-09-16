import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as signaturePad from '@zag-js/signature-pad';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateSignaturePadProps
  extends Omit<signaturePad.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateSignaturePadReturn extends signaturePad.Api {}

export function createSignaturePad(
  props: CreateSignaturePadProps,
): CreateSignaturePadReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: signaturePad.Context = reflect(() => ({
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(signaturePad.machine(context), {context});

  return reflect(() => signaturePad.connect(state, send, normalizeProps));
}
