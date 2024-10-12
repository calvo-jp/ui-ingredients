import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getFieldContext} from '$lib/field/field-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateRatingGroupProps
  extends Omit<ratingGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(
  props: CreateRatingGroupProps,
): CreateRatingGroupReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = uid();

  const context: ratingGroup.Context = reflect(() => ({
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    required: field?.required,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    ...props,
    id: props.id ?? id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
  }));

  const [state, send] = useMachine(ratingGroup.machine(context), {context});

  return reflect(() => {
    const o = ratingGroup.connect(state, send, normalizeProps);

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
