export * as NumberInput from './number-input.js';

export type {NumberInputControlTriggerProps} from './number-input-control.svelte';
export type {NumberInputDecrementTriggerProps} from './number-input-decrement-trigger.svelte';
export type {NumberInputIncrementTriggerProps} from './number-input-increment-trigger.svelte';
export type {NumberInputInputProps} from './number-input-input.svelte';
export type {NumberInputLabelProps} from './number-input-label.svelte';
export type {NumberInputProps} from './number-input-root.svelte';
export type {NumberInputScrubberProps} from './number-input-scrubber.svelte';
export type {NumberInputValueTextProps} from './number-input-value-text.svelte';

export {
  createNumberInput,
  type CreateNumberInputProps,
  type CreateNumberInputReturn,
} from './create-number-input.svelte.js';
export {anatomy as numberInputAnatomy} from './number-input-anatomy.js';
export {
  getNumberInputContext,
  setNumberInputContext,
} from './number-input-context.svelte.js';
