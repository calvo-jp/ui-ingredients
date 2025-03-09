import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateRadioGroupProps
  extends Omit<radioGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(
  props: CreateRadioGroupProps,
): CreateRadioGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(radioGroup.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => radioGroup.connect(service, normalizeProps));
}
