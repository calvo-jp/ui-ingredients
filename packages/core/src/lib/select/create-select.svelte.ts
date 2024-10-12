import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createSplitProps} from '@zag-js/utils';

type Omitted = 'id' | 'dir' | 'getRootNode' | 'collection' | 'open.controlled';

export interface CreateSelectProps<T>
  extends select.CollectionOptions<T>,
    Omit<select.Context, Omitted> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateSelectReturn extends select.Api {}

export function createSelect<T>(
  props: CreateSelectProps<T>,
): CreateSelectReturn {
  const [collectionProps, selectProps] = $derived(
    createSplitProps<select.CollectionOptions<T>>([
      'items',
      'itemToValue',
      'itemToString',
      'isItemDisabled',
    ])(props),
  );

  const collection = $derived(select.collection(collectionProps));

  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: select.Context = reflect(() => ({
    id,
    ids: {
      label: field?.ids.label,
      hiddenSelect: field?.ids.control,
    },
    dir: locale?.dir,
    invalid: field?.invalid,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    ...selectProps,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    collection,
  }));

  const [state, send] = useMachine(select.machine(context), {context});

  return reflect(() => {
    const o = select.connect(state, send, normalizeProps);

    return {
      ...o,
      getHiddenSelectProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...o.getHiddenSelectProps(),
        };
      },
    };
  });
}
