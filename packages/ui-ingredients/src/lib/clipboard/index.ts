export * as Clipboard from './clipboard.js';

export type {ClipboardControlProps} from './clipboard-control.svelte';
export type {ClipboardIndicatorProps} from './clipboard-indicator.svelte';
export type {ClipboardInputProps} from './clipboard-input.svelte';
export type {ClipboardLabelProps} from './clipboard-label.svelte';
export type {ClipboardProps} from './clipboard-root.svelte';
export type {ClipboardTriggerProps} from './clipboard-trigger.svelte';

export {anatomy as clipboardAnatomy} from './clipboard-anatomy.js';
export {
  getClipboardContext,
  setClipboardContext,
} from './clipboard-context.svelte.js';
export {
  createClipboard,
  type CreateClipboardProps,
  type CreateClipboardReturn,
} from './create-clipboard.svelte.js';
