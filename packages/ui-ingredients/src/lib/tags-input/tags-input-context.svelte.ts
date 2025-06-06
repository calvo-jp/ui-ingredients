import type {ItemProps} from '@zag-js/tags-input';
import {createContext} from '../create-context.svelte.js';
import type {CreateTagsInputReturn} from './create-tags-input.svelte.js';

export const [getTagsInputContext, setTagsInputContext] =
  createContext<CreateTagsInputReturn>('TagsInput');

export const [getTagsInputItemPropsContext, setTagsInputItemPropsContext] =
  createContext<ItemProps>('TagsInputItem.props');
