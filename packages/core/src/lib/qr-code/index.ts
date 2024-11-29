export * as QrCode from './qr-code.js';

export type {QrCodeFrameProps} from './qr-code-frame.svelte';
export type {QrCodeOverlayProps} from './qr-code-overlay.svelte';
export type {QrCodePatternProps} from './qr-code-pattern.svelte';
export type {QrCodeProps} from './qr-code-root.svelte';

export {
  createQRCode,
  type CreateQrCodeProps,
  type CreateQrCodeReturn,
} from './create-qr-code.svelte.js';
export {anatomy as qrCodeAnatomy} from './qr-code-anatomy.js';
export {getQrCodeContext, setQrCodeContext} from './qr-code-context.svelte.js';
