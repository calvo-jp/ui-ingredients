import {Context} from '$lib/utils.svelte.js';
import type {CreateSignaturePadReturn} from './create-signature-pad.svelte.js';

export const signaturePadContext = new Context<CreateSignaturePadReturn>(
  'SignaturePad',
);
