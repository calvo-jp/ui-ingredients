import {createContext} from '../create-context.svelte.js';
import type {CreateSignaturePadReturn} from './create-signature-pad.svelte.js';

export const [getSignaturePadContext, setSignaturePadContext] =
  createContext<CreateSignaturePadReturn>('SignaturePad');
