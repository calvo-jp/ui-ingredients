import {createContext} from '../create-context.svelte.js';
import type {CreateQrCodeReturn} from './create-qr-code.svelte.js';

export const [getQrCodeContext, setQrCodeContext] =
  createContext<CreateQrCodeReturn>('QRCode');
