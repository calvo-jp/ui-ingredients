export * as Tabs from './tabs.js';

export type {TabsContentProps} from './tabs-content.svelte';
export type {TabsIndicatorProps} from './tabs-indicator.svelte';
export type {TabsListProps} from './tabs-list.svelte';
export type {TabsProps} from './tabs-root.svelte';
export type {TabsTriggerProps} from './tabs-trigger.svelte';

export {
  createTabs,
  type CreateTabsProps,
  type CreateTabsReturn,
} from './create-tabs.svelte.js';
export {anatomy as tabsAnatomy} from './tabs-anatomy.js';
export {getTabsContext, setTabsContext} from './tabs-context.svelte.js';
