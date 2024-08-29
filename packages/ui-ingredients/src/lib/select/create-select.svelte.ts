import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateSelectProps<T>
  extends Omit<select.Context, 'id' | 'dir' | 'getRootNode' | 'collection' | 'open.controlled'> {
  id?: string | null;
  items: T[];
  itemToString?: (item: T) => string;
  itemToValue?: (item: T) => string;
  isItemDisabled?: (item: T) => boolean;
  defaultOpen?: boolean;
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

  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    select.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      getRootNode: environment?.getRootNode,
      collection,
      'open.controlled': props.open != null,
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
