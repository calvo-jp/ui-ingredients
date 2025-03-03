import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateRadioGroupProps
  extends Omit<radioGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(
  props: CreateRadioGroupProps,
): CreateRadioGroupReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const context: radioGroup.Props = reflect(() => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(radioGroup.machine, context);

  return reflect(() => radioGroup.connect(service, normalizeProps));
}
