export * as Splitter from './splitter.js';

export type {SplitterPanelProps} from './splitter-panel.svelte';
export type {SplitterResizeTriggerProps} from './splitter-resize-trigger.svelte';
export type {SplitterProps} from './splitter-root.svelte';

export {
  createSplitter,
  type CreateSplitterProps,
  type CreateSplitterReturn,
} from './create-splitter.svelte.js';
export {anatomy as splitterAnatomy} from './splitter-anatomy.js';
export {
  getSplitterContext,
  setSplitterContext,
} from './splitter-context.svelte.js';
