export * as AlertDialog from './alert-dialog.js';

export type {AlertDialogBackdropProps} from './alert-dialog-backdrop.svelte';
export type {AlertDialogCloseTriggerProps} from './alert-dialog-close-trigger.svelte';
export type {AlertDialogContentProps} from './alert-dialog-content.svelte';
export type {AlertDialogDescriptionProps} from './alert-dialog-description.svelte';
export type {AlertDialogPositionerProps} from './alert-dialog-positioner.svelte';
export type {AlertDialogProps} from './alert-dialog-root.svelte';
export type {AlertDialogTitleProps} from './alert-dialog-title.svelte';
export type {AlertDialogTriggerProps} from './alert-dialog-trigger.svelte';

export {anatomy as alertDialogAnatomy} from './alert-dialog-anatomy.js';
export {
  getAlertDialogContext,
  setAlertDialogContext,
} from './alert-dialog-context.svelte.js';
export {
  createAlertDialog,
  type CreateAlertDialogProps,
  type CreateAlertDialogReturn,
} from './create-alert-dialog.svelte.js';
