import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as combobox from '@zag-js/combobox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateComboboxProps<T>
  extends Omit<combobox.Context, 'id' | 'dir' | 'collection' | 'getRootNode' | 'open.controlled'> {
  id?: string | null;
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
  defaultOpen?: boolean;
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

  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    combobox.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
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
