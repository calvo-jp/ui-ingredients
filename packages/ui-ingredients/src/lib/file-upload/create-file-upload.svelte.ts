import * as fileUpload from '@zag-js/file-upload';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateFileUploadProps
  extends Omit<fileUpload.Props, 'dir' | 'getRootNode'> {}

export interface CreateFileUploadReturn extends fileUpload.Api<any> {}

export function createFileUpload(
  props: CreateFileUploadProps,
): CreateFileUploadReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(fileUpload.machine, () => ({
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    locale: locale?.locale,
    invalid: field?.invalid,
    disabled: field?.disabled,
    required: field?.required,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => {
    const api = fileUpload.connect(service, normalizeProps);

    return {
      ...api,
      getHiddenInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...api.getHiddenInputProps(),
        };
      },
    };
  });
}
