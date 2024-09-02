export * as Timer from './timer.js';

export type {TimerActionTriggerProps} from './action-trigger.svelte';
export type {TimerItemLabelProps} from './item-label.svelte';
export type {TimerItemValueProps} from './item-value.svelte';
export type {TimerItemProps} from './item.svelte';
export type {TimerProps} from './root.svelte';
export type {TimerSeparatorProps} from './separator.svelte';

export {anatomy as timerAnatomy} from '@zag-js/timer';
export {getTimerContext} from './context.svelte.js';
