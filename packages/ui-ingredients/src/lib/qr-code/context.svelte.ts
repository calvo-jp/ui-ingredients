import {Context} from '$lib/context.svelte.js';
import type {CreateQrCodeReturn} from './create-qr-code.svelte.js';

export const qrCodeContext = new Context<CreateQrCodeReturn>('QRCode');
