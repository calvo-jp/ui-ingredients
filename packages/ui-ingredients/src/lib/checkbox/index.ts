export * as Checkbox from './checkbox.js';

export type {CheckboxControlProps} from './checkbox-control.svelte';
export type {CheckboxHiddenInputProps} from './checkbox-hidden-input.svelte';
export type {CheckboxIndicatorProps} from './checkbox-indicator.svelte';
export type {CheckboxLabelProps} from './checkbox-label.svelte';
export type {CheckboxProps} from './checkbox-root.svelte';

export {anatomy as checkboxAnatomy} from './checkbox-anatomy.js';
export {
  getCheckboxContext,
  setCheckboxContext,
} from './checkbox-context.svelte.js';
export {
  createCheckbox,
  type CreateCheckboxProps,
  type CreateCheckboxReturn,
} from './create-checkbox.svelte.js';
