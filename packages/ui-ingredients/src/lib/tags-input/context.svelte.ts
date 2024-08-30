import {Context} from '$lib/context.svelte.js';
import type {ItemProps} from '@zag-js/tags-input';
import type {CreateTagsInputReturn} from './create-tags-input.svelte.js';

export const tagsInputContext = new Context<CreateTagsInputReturn>('TagsInput');
export const tagsInputItemPropsContext = new Context<ItemProps>(
  'TagsInputItem',
);
