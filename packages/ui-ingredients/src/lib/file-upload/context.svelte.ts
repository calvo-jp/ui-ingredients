import * as fileUpload from '@zag-js/file-upload';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateFileUploadContextProps extends fileUpload.Context {}
export interface CreateFileUploadContextReturn
  extends ReturnType<typeof createFileUploadContext> {}

export function createFileUploadContext(
  props: CreateFileUploadContextProps,
): fileUpload.Api<any> {
  const [state, send] = useMachine(fileUpload.machine(props));

  const api = $derived(
    reflect(() => fileUpload.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setFileUploadContext(value: CreateFileUploadContextReturn) {
  return setContext('FileUpload', value);
}

export function useFileUploadContext() {
  return getContext<CreateFileUploadContextReturn>('FileUpload');
}
