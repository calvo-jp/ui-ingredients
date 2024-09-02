export * as QrCode from './qr-code.js';

export type {QrCodeFrameProps} from './frame.svelte';
export type {QrCodeOverlayProps} from './overlay.svelte';
export type {QrCodePatternProps} from './pattern.svelte';
export type {QrCodeProps} from './root.svelte';

export {anatomy as qrCodeAnatomy} from '@zag-js/qr-code';
export {getQrCodeContext} from './context.svelte.js';
