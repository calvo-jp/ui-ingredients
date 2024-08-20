import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tagsInput from '@zag-js/tags-input';
import {getContext, setContext} from 'svelte';

export interface CreateTagsInputContextProps extends tagsInput.Context {}
export interface CreateTagsInputContextReturn
  extends ReturnType<typeof createTagsInputContext> {}

export function createTagsInputContext(props: CreateTagsInputContextProps) {
  const [state, send] = useMachine(tagsInput.machine(props));

  const api = $derived(
    reflect(() => tagsInput.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setTagsInputContext(value: CreateTagsInputContextReturn) {
  setContext('TagsInput', value);
}

export function useTagsInputContext() {
  return getContext<CreateTagsInputContextReturn>('TagsInput');
}

export function setTagsInputItemContext(value: tagsInput.ItemProps) {
  setContext('TagsInputItem', value);
}

export function useTagsInputItemContext() {
  return getContext<tagsInput.ItemProps>('TagsInputItem');
}
