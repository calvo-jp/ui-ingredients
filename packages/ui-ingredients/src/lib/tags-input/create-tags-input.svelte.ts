import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tagsInput from '@zag-js/tags-input';

export interface CreateTagsInputProps extends tagsInput.Context {}
export interface CreateTagsInputReturn extends tagsInput.Api {}

export function createTagsInputt(props: CreateTagsInputProps) {
  const [state, send] = useMachine(tagsInput.machine(props));

  const api = $derived(reflect(() => tagsInput.connect(state, send, normalizeProps)));

  return api;
}
