import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

type Omitted = 'id' | 'dir' | 'getRootNode' | 'open.controlled';

export interface CreateSelectProps extends Omit<select.Context, Omitted> {
  id?: string;
  openControlled?: boolean;
}

export interface CreateSelectReturn extends select.Api {}

export function createSelect(props: CreateSelectProps): CreateSelectReturn {
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
    ...props,
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
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
