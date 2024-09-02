import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateComboboxProps<T>
  extends Omit<
    combobox.Context,
    'id' | 'dir' | 'collection' | 'getRootNode' | 'open.controlled'
  > {
  id?: string | null;
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
  defaultOpen?: boolean;
}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox<T>(
  props: CreateComboboxProps<T>,
): CreateComboboxReturn {
  const collection = $derived(
    combobox.collection({
      items: props.items,
      itemToValue: (item) =>
        props.itemToValue ? props.itemToValue(item) : String(item),
      itemToString: (item) =>
        props.itemToString ? props.itemToString(item) : String(item),
      isItemDisabled: (item) =>
        props.isItemDisabled ? props.isItemDisabled(item) : false,
    }),
  );

  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: Omit<combobox.Context, 'collection'> = $derived(
    reflect(() => ({
      ids: {
        label: field?.ids.label,
        input: field?.ids.control,
      },
      invalid: field?.invalid,
      required: field?.required,
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      ...props,
      id: props.id ?? id,
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    })),
  );

  const initialContext: combobox.Context = $derived(
    reflect(() => ({
      ...context,
      collection,
    })),
  );

  const [state, send] = useMachine(combobox.machine(initialContext), {context});

  const api = $derived(
    reflect(() => {
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
    }),
  );

  return api;
}
