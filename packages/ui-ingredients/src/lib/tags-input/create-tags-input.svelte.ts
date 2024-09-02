import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as tagsInput from '@zag-js/tags-input';
import {uid} from 'uid';

export interface CreateTagsInputProps
  extends Omit<tagsInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTagsInputReturn extends tagsInput.Api {}

export function createTagsInput(props: CreateTagsInputProps) {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: tagsInput.Context = $derived(
    reflect(() => ({
      ids: {
        label: field?.ids.label,
        hiddenInput: field?.ids.control,
      },
      invalid: field?.invalid,
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      required: field?.required,
      ...props,
      id: props.id ?? id,
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    })),
  );

  const [state, send] = useMachine(tagsInput.machine(context), {context});

  const api = $derived(
    reflect(() => {
      const o = tagsInput.connect(state, send, normalizeProps);

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
