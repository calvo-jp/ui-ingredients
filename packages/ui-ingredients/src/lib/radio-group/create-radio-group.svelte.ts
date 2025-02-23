import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateRadioGroupProps
  extends Omit<radioGroup.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(
  props: CreateRadioGroupProps,
): CreateRadioGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: radioGroup.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(radioGroup.machine, context);

  return reflect(() => radioGroup.connect(service, normalizeProps));
}
