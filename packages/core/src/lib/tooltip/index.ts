export * as Tooltip from './tooltip.js';

export type {TooltipArrowTipProps} from './tooltip-arrow-tip.svelte';
export type {TooltipArrowProps} from './tooltip-arrow.svelte';
export type {TooltipContentProps} from './tooltip-content.svelte';
export type {TooltipPositionerProps} from './tooltip-positioner.svelte';
export type {TooltipProps} from './tooltip-root.svelte';
export type {TooltipTriggerProps} from './tooltip-trigger.svelte';

export {
  createTooltip,
  type CreateTooltipProps,
  type CreateTooltipReturn,
} from './create-tooltip.svelte.js';
export {anatomy as tooltipAnatomy} from './tooltip-anatomy.js';
export {
  getTooltipContext,
  setTooltipContext,
} from './tooltip-context.svelte.js';
