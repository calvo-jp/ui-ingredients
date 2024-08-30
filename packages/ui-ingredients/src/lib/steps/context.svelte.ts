import {Context} from '$lib/context.svelte.js';
import type {ItemProps} from '@zag-js/steps';
import type {CreateStepsReturn} from './create-steps.svelte.js';

export const stepsContext = new Context<CreateStepsReturn>('Steps');
export const stepsItemPropsContext = new Context<ItemProps>('StepsItem');
