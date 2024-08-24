import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {createUniqueId} from '$lib/utils.svelte.js';
import * as editable from '@zag-js/editable';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreateEditableProps
  extends Omit<editable.Context, 'id' | 'dir' | 'getRootNode' | 'edit.controlled'> {
  id?: string | null;
}

export interface CreateEditableReturn extends editable.Api {}

export function createEditable(props: CreateEditableProps): CreateEditableReturn {
  const localeContext = getLocaleContext();
  const environmentContext = getEnvironmentContext();

  const [state, send] = useMachine(
    editable.machine({
      ...props,
      id: props.id ?? createUniqueId(),
      dir: localeContext?.dir,
      getRootNode: environmentContext?.getRootNode,
      'edit.controlled': props.edit != null,
    }),
  );

  const api = $derived(reflect(() => editable.connect(state, send, normalizeProps)));

  return api;
}
