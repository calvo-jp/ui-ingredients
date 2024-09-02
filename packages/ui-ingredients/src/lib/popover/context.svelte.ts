import {createContext} from '$lib/create-context.svelte.js';
import type {CreatePopoverReturn} from './create-popover.svelte.js';

export const [getPopoverContext, setPopoverContext] =
  createContext<CreatePopoverReturn>('Popover');
