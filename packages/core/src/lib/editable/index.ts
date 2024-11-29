export * as Editable from './editable.js';

export type {EditableAreaProps} from './editable-area.svelte';
export type {EditableCancelTriggerProps} from './editable-cancel-trigger.svelte';
export type {EditableControlProps} from './editable-control.svelte';
export type {EditableEditTriggerProps} from './editable-edit-trigger.svelte';
export type {EditableInputProps} from './editable-input.svelte';
export type {EditableLabelProps} from './editable-label.svelte';
export type {EditablePreviewProps} from './editable-preview.svelte';
export type {EditableProps} from './editable-root.svelte';
export type {EditableSubmitTriggerProps} from './editable-submit-trigger.svelte';

export {
  createEditable,
  type CreateEditableProps,
  type CreateEditableReturn,
} from './create-editable.svelte.js';
export {anatomy as editableAnatomy} from './editable-anatomy.js';
export {
  getEditableContext,
  setEditableContext,
} from './editable-context.svelte.js';
