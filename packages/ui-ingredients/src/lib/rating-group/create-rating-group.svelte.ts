import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateRatingGroupProps
  extends Omit<ratingGroup.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(
  props: CreateRatingGroupProps,
): CreateRatingGroupReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: ratingGroup.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    required: field?.required,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(ratingGroup.machine, context);

  return reflect(() => {
    const o = ratingGroup.connect(service, normalizeProps);

    return {
      ...o,
      getHiddenInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...o.getHiddenInputProps(),
        };
      },
    };
  });
}
