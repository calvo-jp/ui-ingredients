import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateComboboxContextProps<T> extends Omit<combobox.Context, 'collection'> {
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
}

export interface CreateComboboxContextReturn extends ReturnType<typeof createComboboxContext> {}

export function createComboboxContext<T>(props: CreateComboboxContextProps<T>) {
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

export function setComboboxContext(value: CreateComboboxContextReturn) {
  setContext('Combobox', value);
}

export function useComboboxContext() {
  return getContext<CreateComboboxContextReturn>('Combobox');
}

export function setComboboxItemContext(value: combobox.ItemProps) {
  setContext('ComboboxItem', value);
}

export function useComboboxItemContext() {
  return getContext<combobox.ItemProps>('ComboboxItem');
}

export function setComboboxItemGroupContext(value: combobox.ItemGroupProps) {
  setContext('ComboboxItemGroup', value);
}

export function useComboboxItemGroupContext() {
  return getContext<combobox.ItemGroupProps>('ComboboxItemGroup');
}
