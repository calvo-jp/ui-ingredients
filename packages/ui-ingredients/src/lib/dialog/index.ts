export * as Dialog from './dialog.js';

export type {DialogBackdropProps} from './dialog-backdrop.svelte';
export type {DialogCloseTriggerProps} from './dialog-close-trigger.svelte';
export type {DialogContentProps} from './dialog-content.svelte';
export type {DialogDescriptionProps} from './dialog-description.svelte';
export type {DialogPositionerProps} from './dialog-positioner.svelte';
export type {DialogProps} from './dialog-root.svelte';
export type {DialogTitleProps} from './dialog-title.svelte';
export type {DialogTriggerProps} from './dialog-trigger.svelte';

export {
  createDialog,
  type CreateDialogProps,
  type CreateDialogReturn,
} from './create-dialog.svelte.js';
export {anatomy as dialogAnatomy} from './dialog-anatomy.js';
export {getDialogContext, setDialogContext} from './dialog-context.svelte.js';
