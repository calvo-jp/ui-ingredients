import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateSelectContextProps<T>
  extends Omit<select.Context, 'collection'> {
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
}

export interface CreateSelectContextReturn
  extends ReturnType<typeof createSelectContext> {}

export function createSelectContext<T>(props: CreateSelectContextProps<T>) {
  const collection = $derived(
    select.collection({
      items: props.items,
      itemToValue: (item) =>
        props.itemToValue ? props.itemToValue(item) : String(item),
      itemToString: (item) =>
        props.itemToString ? props.itemToString(item) : String(item),
      isItemDisabled: (item) =>
        props.isItemDisabled ? props.isItemDisabled(item) : false,
    }),
  );

  const [state, send] = useMachine(
    select.machine({
      ...props,
      collection,
    }),
  );

  const api = $derived(
    reflect(() => ({
      ...select.connect(state, send, normalizeProps),
      collection,
    })),
  );

  return api;
}

export function setSelectContext(value: CreateSelectContextReturn) {
  setContext('Select', value);
}

export function useSelectContext() {
  return getContext<CreateSelectContextReturn>('Select');
}

export function setSelectItemGroupContext(value: select.ItemGroupProps) {
  setContext('SelectItemGroup', value);
}

export function useSelectItemGroupContext() {
  return getContext<select.ItemGroupProps>('SelectItemGroup');
}

export interface CreateItemContextReturn<T> extends select.ItemProps<T> {
  label: string;
}

export function setSelectItemContext(value: select.ItemProps) {
  setContext('SelectItem', value);
}

export function useSelectItemContext() {
  return getContext<select.ItemProps>('SelectItem');
}
