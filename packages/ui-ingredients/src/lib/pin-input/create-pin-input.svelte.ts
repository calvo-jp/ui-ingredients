import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import type {HTMLProps} from '$lib/types.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePinInputProps extends Omit<pinInput.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreatePinInputReturn extends pinInput.Api {
  getClearTriggerProps(): HTMLProps<'button'>;
}

export function createPinInputContext(props: CreatePinInputProps): CreatePinInputReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    pinInput.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => {
      const o = pinInput.connect(state, send, normalizeProps);

      return {
        ...o,
        getClearTriggerProps(): HTMLProps<'button'> {
          return {
            onclick() {
              o.clearValue();
            },
          };
        },
      };
    }),
  );

  return api;
}
