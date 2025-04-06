import type {ItemProps} from '@zag-js/timer';
import {createContext} from '../create-context.svelte.js';
import type {CreateTimerReturn} from './create-timer.svelte.js';

export const [getTimerContext, setTimerContext] =
  createContext<CreateTimerReturn>('Timer');

export const [getTimerItemPropsContext, setTimerItemPropsContext] =
  createContext<ItemProps>('TimerItem.props');
