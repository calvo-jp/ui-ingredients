import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as editable from '@zag-js/editable';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateEditableProps
  extends Omit<
    editable.Context,
    'id' | 'dir' | 'getRootNode' | 'edit.controlled'
  > {
  id?: string | null;
  defaultEdit?: boolean;
}

export interface CreateEditableReturn extends editable.Api {}

export function createEditable(
  props: CreateEditableProps,
): CreateEditableReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: editable.Context = reflect(() => ({
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    edit: props.defaultEdit ?? props.edit,
    getRootNode: environment?.getRootNode,
    'edit.controlled': props.edit != null,
  }));

  const [state, send] = useMachine(editable.machine(context), {context});

  return reflect(() => {
    const o = editable.connect(state, send, normalizeProps);

    return {
      ...o,
      getInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...o.getInputProps(),
        };
      },
    };
  });
}
