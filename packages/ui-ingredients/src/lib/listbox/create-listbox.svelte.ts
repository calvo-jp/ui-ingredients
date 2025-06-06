import * as listbox from '@zag-js/listbox';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateListboxProps
  extends Omit<listbox.Props, 'dir' | 'getRootNode'> {}

export interface CreateListboxReturn extends listbox.Api {}

export function createListbox(props: CreateListboxProps): CreateListboxReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(listbox.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => listbox.connect(service, normalizeProps));
}
