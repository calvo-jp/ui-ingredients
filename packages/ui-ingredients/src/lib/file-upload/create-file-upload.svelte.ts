import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as fileUpload from '@zag-js/file-upload';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateFileUploadProps
  extends Omit<fileUpload.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateFileUploadReturn extends fileUpload.Api<any> {}

export function createFileUpload(
  props: CreateFileUploadProps,
): CreateFileUploadReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    fileUpload.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      locale: props.locale ?? locale?.locale,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => fileUpload.connect(state, send, normalizeProps)),
  );

  return api;
}
