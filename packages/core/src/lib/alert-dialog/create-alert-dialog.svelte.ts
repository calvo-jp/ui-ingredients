import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {mergeProps} from '$lib/merge-props.js';
import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {parts} from './alert-dialog-anatomy.js';

export interface CreateAlertDialogProps
  extends Omit<
    dialog.Context,
    'id' | 'dir' | 'role' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateAlertDialogReturn extends dialog.Api {}

export function createAlertDialog(
  props: CreateAlertDialogProps,
): CreateAlertDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: dialog.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    role: 'alertdialog',
    getRootNode: environment?.getRootNode,
    'open.controlled': props.openControlled,
    ...props,
  }));

  const [state, send] = useMachine(dialog.machine(context), {context});

  return reflect(() => {
    const o = dialog.connect(state, send, normalizeProps);

    return {
      ...o,
      getBackdropProps() {
        return mergeProps(o.getBackdropProps(), parts.backdrop.attrs);
      },
      getCloseTriggerProps() {
        return mergeProps(o.getCloseTriggerProps(), parts.closeTrigger.attrs);
      },
      getContentProps() {
        return mergeProps(o.getContentProps(), parts.content.attrs);
      },
      getDescriptionProps() {
        return mergeProps(o.getDescriptionProps(), parts.description.attrs);
      },
      getPositionerProps() {
        return mergeProps(o.getPositionerProps(), parts.positioner.attrs);
      },
      getTitleProps() {
        return mergeProps(o.getTitleProps(), parts.title.attrs);
      },
      getTriggerProps() {
        return mergeProps(o.getTriggerProps(), parts.trigger.attrs);
      },
    };
  });
}
