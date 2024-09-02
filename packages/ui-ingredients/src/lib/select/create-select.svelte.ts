import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateSelectProps<T>
  extends Omit<
    select.Context,
    'id' | 'dir' | 'getRootNode' | 'collection' | 'open.controlled'
  > {
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

  const context: Omit<select.Context, 'collection'> = $derived(
    reflect(() => ({
      ids: {
        label: field?.ids.label,
        hiddenSelect: field?.ids.control,
      },
      invalid: field?.invalid,
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      required: field?.required,
      ...props,
      id: props.id ?? id,
      dir: locale?.dir,
      open: props.defaultOpen ?? props.open,
      getRootNode: environment?.getRootNode,
      'open.controlled': props.open != null,
    })),
  );

  const initialContext: select.Context = $derived(
    reflect(() => ({
      ...context,
      collection,
    })),
  );

  const [state, send] = useMachine(select.machine(initialContext), {context});

  const api = $derived(
    reflect(() => {
      const o = select.connect(state, send, normalizeProps);

      return {
        ...o,
        collection,
        getHiddenSelectProps() {
          return {
            'aria-describedby': field?.['aria-describedby'],
            ...o.getHiddenSelectProps(),
          };
        },
      };
    }),
  );

  return api;
}
