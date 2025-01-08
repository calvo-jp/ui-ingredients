export * as Collapsible from './collapsible.js';

export type {CollapsibleContentProps} from './collapsible-content.svelte';
export type {CollapsibleProps} from './collapsible-root.svelte';
export type {CollapsibleTriggerProps} from './collapsible-trigger.svelte';

export {anatomy as collapsibleAnatomy} from './collapsible-anatomy.js';
export {
  getCollapsibleContext,
  setCollapsibleContext,
} from './collapsible-context.svelte.js';
export {
  createCollapsible,
  type CreateCollapsibleProps,
  type CreateCollapsibleReturn,
} from './create-collapsible.svelte.js';
