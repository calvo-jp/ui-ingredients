import * as select from '@zag-js/select';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateSelectProps
  extends Omit<select.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateSelectReturn extends select.Api {}

export function createSelect(props: CreateSelectProps): CreateSelectReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: select.Props = reflect(() => ({
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
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(select.machine, context);

  return reflect(() => {
    const o = select.connect(service, normalizeProps);

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
