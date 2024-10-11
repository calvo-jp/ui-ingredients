import {createContext} from '$lib/create-context.svelte.js';
import type {ItemProps} from '@zag-js/timer';
import type {CreateTimerReturn} from './create-timer.svelte.js';

export const [getTimerContext, setTimerContext] =
  createContext<CreateTimerReturn>('Timer');

export const [getTimerItemPropsContext, setTimerItemPropsContext] =
  createContext<ItemProps>('TimerItem [PROPS]');
