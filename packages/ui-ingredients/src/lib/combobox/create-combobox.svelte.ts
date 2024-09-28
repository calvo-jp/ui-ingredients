import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createSplitProps} from '@zag-js/utils';
import {uid} from 'uid';

type Omitted = 'id' | 'dir' | 'collection' | 'getRootNode' | 'open.controlled';

export interface CreateComboboxProps<T>
  extends combobox.CollectionOptions<T>,
    Omit<combobox.Context, Omitted> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox<T>(
  props: CreateComboboxProps<T>,
): CreateComboboxReturn {
  const [collectionProps, comboboxProps] = $derived(
    createSplitProps<combobox.CollectionOptions<T>>([
      'items',
      'itemToValue',
      'itemToString',
      'isItemDisabled',
    ])(props),
  );

  const collection = $derived(combobox.collection(collectionProps));

  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: combobox.Context = reflect(() => ({
    id,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    dir: locale?.dir,
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    ...comboboxProps,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    collection,
  }));

  const [state, send] = useMachine(combobox.machine(context), {context});

  return reflect(() => {
    const o = combobox.connect(state, send, normalizeProps);

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
