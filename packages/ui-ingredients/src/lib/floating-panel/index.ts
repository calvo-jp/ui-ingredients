export * as FloatingPanel from './floating-panel.js';

export type {FloatingPanelBodyProps} from './floating-panel-body.svelte';
export type {FloatingPanelCloseTriggerProps} from './floating-panel-close-trigger.svelte';
export type {FloatingPanelContentProps} from './floating-panel-content.svelte';
export type {FloatingPanelControlProps} from './floating-panel-control.svelte';
export type {FloatingPanelDragTriggerProps} from './floating-panel-drag-trigger.svelte';
export type {FloatingPanelHeaderProps} from './floating-panel-header.svelte';
export type {FloatingPanelPositionerProps} from './floating-panel-positioner.svelte';
export type {FloatingPanelResizeTriggerProps} from './floating-panel-resize-trigger.svelte';
export type {FloatingPanelProps} from './floating-panel-root.svelte';
export type {FloatingPanelStageTriggerProps} from './floating-panel-stage-trigger.svelte';
export type {FloatingPanelTitleProps} from './floating-panel-title.svelte';
export type {FloatingPanelTriggerProps} from './floating-panel-trigger.svelte';

export {
  createFloatingPanel,
  type CreateFloatingPanelProps,
  type CreateFloatingPanelReturn,
} from './create-floating-panel.svelte.js';
export {anatomy as floatingPanelAnatomy} from './floating-panel-anatomy.js';
export {
  getFloatingPanelContext,
  setFloatingPanelContext,
} from './floating-panel-context.svelte.js';
