import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import {mergeProps} from '../merge-props.js';
import {parts} from './alert-dialog-anatomy.js';

export interface CreateAlertDialogProps
  extends Omit<dialog.Props, 'dir' | 'role' | 'getRootNode'> {}

export interface CreateAlertDialogReturn extends dialog.Api {}

export function createAlertDialog(
  props: CreateAlertDialogProps,
): CreateAlertDialogReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(
    dialog.machine,
    (): dialog.Props => ({
      dir: locale?.dir,
      role: 'alertdialog',
      getRootNode: environment?.getRootNode,
      ...props,
    }),
  );

  return reflect(() => {
    const api = dialog.connect(service, normalizeProps);

    return {
      ...api,
      getBackdropProps() {
        return mergeProps(api.getBackdropProps(), parts.backdrop.attrs);
      },
      getCloseTriggerProps() {
        return mergeProps(api.getCloseTriggerProps(), parts.closeTrigger.attrs);
      },
      getContentProps() {
        return mergeProps(api.getContentProps(), parts.content.attrs);
      },
      getDescriptionProps() {
        return mergeProps(api.getDescriptionProps(), parts.description.attrs);
      },
      getPositionerProps() {
        return mergeProps(api.getPositionerProps(), parts.positioner.attrs);
      },
      getTitleProps() {
        return mergeProps(api.getTitleProps(), parts.title.attrs);
      },
      getTriggerProps() {
        return mergeProps(api.getTriggerProps(), parts.trigger.attrs);
      },
    };
  });
}
