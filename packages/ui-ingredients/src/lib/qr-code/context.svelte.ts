import {Context} from '$lib/utils.svelte.js';
import type {CreateQRCodeReturn} from './create-qr-code.svelte.js';

export const qrCodeContext = new Context<CreateQRCodeReturn>('QRCode');
