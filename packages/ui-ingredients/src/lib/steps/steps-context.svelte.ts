import type {ItemProps} from '@zag-js/steps';
import {createContext} from '../create-context.svelte.js';
import type {CreateStepsReturn} from './create-steps.svelte.js';

export const [getStepsContext, setStepsContext] =
  createContext<CreateStepsReturn>('Steps');

export const [getStepsItemPropsContext, setStepsItemPropsContext] =
  createContext<ItemProps>('StepsItem [PROPS]');
