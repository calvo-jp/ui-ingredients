import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getFieldContext} from '$lib/field/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {uid} from 'uid';

export interface CreateRatingGroupProps
  extends Omit<ratingGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(
  props: CreateRatingGroupProps,
): CreateRatingGroupReturn {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    ratingGroup.machine({
      ids: {
        label: field?.ids.label,
        hiddenInput: field?.ids.control,
      },
      required: field?.required,
      disabled: field?.disabled,
      readOnly: field?.readOnly,
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => {
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
    }),
  );

  return api;
}
