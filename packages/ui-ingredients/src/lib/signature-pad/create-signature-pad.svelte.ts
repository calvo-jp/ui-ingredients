import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as signaturePad from '@zag-js/signature-pad';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

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

  const [state, send] = useMachine(
    signaturePad.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => signaturePad.connect(state, send, normalizeProps)),
  );

  return api;
}
