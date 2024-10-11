import {createContext} from '$lib/create-context.svelte.js';
import type {ItemProps} from '@zag-js/radio-group';
import type {CreateSegmentGroupReturn} from './create-segment-group.svelte.js';

export const [getSegmentGroupContext, setSegmentGroupContext] =
  createContext<CreateSegmentGroupReturn>('SegmentGroup');

export const [
  getSegmentGroupItemPropsContext,
  setSegmentGroupItemPropsContext,
] = createContext<ItemProps>('SegmentGroupItem [PROPS]');
