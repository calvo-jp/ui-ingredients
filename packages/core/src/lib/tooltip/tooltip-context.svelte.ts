import {createContext} from '$lib/create-context.svelte.js';
import type {CreateTooltipReturn} from './create-tooltip.svelte.js';

export const [getTooltipContext, setTooltipContext] =
  createContext<CreateTooltipReturn>('Tooltip');
