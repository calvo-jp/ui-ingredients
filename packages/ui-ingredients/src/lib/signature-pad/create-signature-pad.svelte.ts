import * as signaturePad from '@zag-js/signature-pad';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateSignaturePadProps
  extends Omit<signaturePad.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateSignaturePadReturn extends signaturePad.Api {}

export function createSignaturePad(
  props: CreateSignaturePadProps,
): CreateSignaturePadReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: signaturePad.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(signaturePad.machine, context);

  return reflect(() => signaturePad.connect(service, normalizeProps));
}
