import {createContext} from '../create-context.svelte.js';
import type {CreateTabsReturn} from './create-tabs.svelte.js';

export const [getTabsContext, setTabsContext] =
  createContext<CreateTabsReturn>('Tabs');
