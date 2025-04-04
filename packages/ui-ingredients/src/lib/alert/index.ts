export * as Alert from './alert.js';

export type {AlertDescriptionProps} from './alert-description.svelte';
export type {AlertIndicatorProps} from './alert-indicator.svelte';
export type {AlertProps} from './alert-root.svelte';
export type {AlertTitleProps} from './alert-title.svelte';

export {anatomy as alertAnatomy} from './alert-anatomy.js';
export {getAlertContext, setAlertContext} from './alert-context.js';
export {
  createAlert,
  type CreateAlertProps,
  type CreateAlertReturn,
} from './create-alert.svelte.js';
