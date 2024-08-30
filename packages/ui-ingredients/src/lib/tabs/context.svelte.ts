import {Context} from '$lib/context.svelte.js';
import type {CreateTabsReturn} from './create-tabs.svelte.js';

export const tabsContext = new Context<CreateTabsReturn>('Tabs');
