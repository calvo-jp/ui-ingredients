import * as signaturePad from '@zag-js/signature-pad';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateSignaturePadProps
  extends Omit<signaturePad.Props, 'dir' | 'getRootNode'> {}

export interface CreateSignaturePadReturn extends signaturePad.Api {}

export function createSignaturePad(
  props: CreateSignaturePadProps,
): CreateSignaturePadReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(signaturePad.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => signaturePad.connect(service, normalizeProps));
}
