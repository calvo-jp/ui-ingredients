export * as SignaturePad from './signature-pad.js';

export type {SignaturePadClearTriggerProps} from './signature-pad-clear-trigger.svelte';
export type {SignaturePadControlProps} from './signature-pad-control.svelte';
export type {SignaturePadCurrentSegmentPathProps} from './signature-pad-current-segment-path.svelte';
export type {SignaturePadGuideProps} from './signature-pad-guide.svelte';
export type {SignaturePadHiddenInputProps} from './signature-pad-hidden-input.svelte';
export type {SignaturePadLabelProps} from './signature-pad-label.svelte';
export type {SignaturePadProps} from './signature-pad-root.svelte';
export type {SignaturePadSegmentPathProps} from './signature-pad-segment-path.svelte';
export type {SignaturePadSegmentProps} from './signature-pad-segment.svelte';

export {
  createSignaturePad,
  type CreateSignaturePadProps,
  type CreateSignaturePadReturn,
} from './create-signature-pad.svelte.js';
export {anatomy as signaturePadAnatomy} from './signature-pad-anatomy.js';
export {
  getSignaturePadContext,
  setSignaturePadContext,
} from './signature-pad-context.svelte.js';
