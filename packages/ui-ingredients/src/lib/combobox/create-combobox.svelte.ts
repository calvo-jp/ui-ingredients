import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateComboboxProps<T> extends Omit<combobox.Context, 'collection'> {
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox<T>(props: CreateComboboxProps<T>): CreateComboboxReturn {
  const collection = $derived(
    combobox.collection({
      items: props.items,
      itemToValue: (item) => (props.itemToValue ? props.itemToValue(item) : String(item)),
      itemToString: (item) => (props.itemToString ? props.itemToString(item) : String(item)),
      isItemDisabled: (item) => (props.isItemDisabled ? props.isItemDisabled(item) : false),
    }),
  );

  const [state, send] = useMachine(
    combobox.machine({
      ...props,
      collection,
    }),
  );

  const api = $derived(
    reflect(() => ({
      ...combobox.connect(state, send, normalizeProps),
      collection,
    })),
  );

  return api;
}
