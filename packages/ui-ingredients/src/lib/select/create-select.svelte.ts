import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSelectProps<T> extends Omit<select.Context, 'collection'> {
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
}

export interface CreateSelectReturn extends select.Api {}

export function createSelect<T>(props: CreateSelectProps<T>) {
  const collection = $derived(
    select.collection({
      items: props.items,
      itemToValue: (item) => (props.itemToValue ? props.itemToValue(item) : String(item)),
      itemToString: (item) => (props.itemToString ? props.itemToString(item) : String(item)),
      isItemDisabled: (item) => (props.isItemDisabled ? props.isItemDisabled(item) : false),
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
