import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as numberInput from '@zag-js/number-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateNumberInputProps
  extends Omit<numberInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateNumberInputReturn extends numberInput.Api {}

export function createNumberInput(
  props: CreateNumberInputProps,
): CreateNumberInputReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    numberInput.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      locale: props.locale ?? locale?.locale,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => numberInput.connect(state, send, normalizeProps)),
  );

  return api;
}
