import {Context} from '$lib/utils.svelte.js';
import type {ItemProps} from '@zag-js/timer';
import type {CreateTimerReturn} from './create-timer.svelte.js';

export const timerContext = new Context<CreateTimerReturn>('Timer');
export const timerItemPropsContext = new Context<ItemProps>('TimerItem');
