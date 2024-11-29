export * as Switch from './switch.js';

export type {SwitchControlProps} from './switch-control.svelte';
export type {SwitchHiddenInputProps} from './switch-hidden-input.svelte';
export type {SwitchLabelProps} from './switch-label.svelte';
export type {SwitchProps} from './switch-root.svelte';
export type {SwitchThumbProps} from './switch-thumb.svelte';

export {
  createSwitch,
  type CreateSwitchProps,
  type CreateSwitchReturn,
} from './create-switch.svelte.js';
export {anatomy as switchAnatomy} from './switch-anatomy.js';
export {getSwitchContext, setSwitchContext} from './switch-context.svelte.js';
