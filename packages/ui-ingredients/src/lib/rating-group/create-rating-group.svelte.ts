import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getFieldContext} from '../field/field-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateRatingGroupProps
  extends Omit<ratingGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(
  props: CreateRatingGroupProps,
): CreateRatingGroupReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(ratingGroup.machine, () => ({
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

  return reflect(() => {
    const api = ratingGroup.connect(service, normalizeProps);

    return {
      ...api,
      getHiddenInputProps() {
        return {
          'aria-describedby': field?.['aria-describedby'],
          ...api.getHiddenInputProps(),
        };
      },
    };
  });
}
