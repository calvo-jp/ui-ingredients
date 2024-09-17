import {createContext} from '$lib/create-context.svelte.js';
import type {ItemProps} from '@zag-js/tags-input';
import type {CreateTagsInputReturn} from './create-tags-input.svelte.js';

export const [getTagsInputContext, setTagsInputContext] =
  createContext<CreateTagsInputReturn>('TagsInput');

export const [getTagsInputItemPropsContext, setTagsInputItemPropsContext] =
  createContext<ItemProps>('TagsInputItem');
