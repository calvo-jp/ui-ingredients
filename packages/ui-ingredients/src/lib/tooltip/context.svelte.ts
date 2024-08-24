import {Context} from '$lib/utils.svelte.js';
import type {CreateTooltipReturn} from './create-tooltip.svelte.js';

export const tooltipContext = new Context<CreateTooltipReturn>('Tooltip');
