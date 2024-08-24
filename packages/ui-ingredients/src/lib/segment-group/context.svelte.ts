import {Context} from '$lib/utils.svelte.js';
import type {ItemProps} from '@zag-js/radio-group';
import type {CreateSegmentGroupReturn} from './create-segment-group.svelte.js';

export const segmentGroupContext = new Context<CreateSegmentGroupReturn>('SegmentGroup');
export const segmentGroupItemPropsContext = new Context<ItemProps>('SegmentGroupItem');
