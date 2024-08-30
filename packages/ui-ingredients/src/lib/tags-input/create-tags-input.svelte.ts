import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tagsInput from '@zag-js/tags-input';

export interface CreateTagsInputProps
  extends Omit<tagsInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTagsInputReturn extends tagsInput.Api {}

export function createTagsInput(props: CreateTagsInputProps) {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    tagsInput.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => tagsInput.connect(state, send, normalizeProps)));

  return api;
}
