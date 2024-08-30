import {Context} from '$lib/context.svelte.js';
import type {CreateSignaturePadReturn} from './create-signature-pad.svelte.js';

export const signaturePadContext = new Context<CreateSignaturePadReturn>(
  'SignaturePad',
);
