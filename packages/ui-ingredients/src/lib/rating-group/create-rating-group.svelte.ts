import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateRatingGroupProps
  extends Omit<ratingGroup.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(props: CreateRatingGroupProps): CreateRatingGroupReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    ratingGroup.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
    }),
  );

  const api = $derived(reflect(() => ratingGroup.connect(state, send, normalizeProps)));

  return api;
}
