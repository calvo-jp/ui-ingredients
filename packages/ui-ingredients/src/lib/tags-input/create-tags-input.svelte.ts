import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tagsInput from '@zag-js/tags-input';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateTagsInputProps
  extends Omit<tagsInput.Props, 'dir' | 'getRootNode'> {}

export interface CreateTagsInputReturn extends tagsInput.Api {}

export function createTagsInput(
  props: CreateTagsInputProps,
): CreateTagsInputReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: tagsInput.Props = reflect(() => ({
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(tagsInput.machine, context);

  return reflect(() => {
    const api = tagsInput.connect(service, normalizeProps);

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
