export * as SegmentGroup from './segment-group.js';

export type {SegmentGroupIndicatorProps} from './segment-group-indicator.svelte';
export type {SegmentGroupItemControlProps} from './segment-group-item-control.svelte';
export type {SegmentGroupItemHiddenInputProps} from './segment-group-item-hidden-input.svelte';
export type {SegmentGroupItemTextProps} from './segment-group-item-text.svelte';
export type {SegmentGroupItemProps} from './segment-group-item.svelte';
export type {SegmentGroupLabelProps} from './segment-group-label.svelte';
export type {SegmentGroupProps} from './segment-group-root.svelte';

export {
  createSegmentGroup,
  type CreateSegmentGroupProps,
  type CreateSegmentGroupReturn,
} from './create-segment-group.svelte.js';
export {anatomy as segmentGroupAnatomy} from './segment-group-anatomy.js';
export {
  getSegmentGroupContext,
  setSegmentGroupContext,
} from './segment-group-context.svelte.js';
