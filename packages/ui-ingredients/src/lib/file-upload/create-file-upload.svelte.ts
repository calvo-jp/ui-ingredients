import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
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
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    fileUpload.machine({
      ids: {
        label: field?.ids.label,
        hiddenInput: field?.ids.control,
      },
      disabled: field?.disabled,
      required: field?.required,
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      locale: props.locale ?? locale?.locale,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => {
      const o = fileUpload.connect(state, send, normalizeProps);

      return {
        ...o,
        getHiddenInputProps() {
          return {
            'aria-describedby': field?.['aria-describedby'],
            ...o.getHiddenInputProps(),
          };
        },
      };
    }),
  );

  return api;
}
