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

  const context: dialog.Props = reflect(() => ({
    dir: locale?.dir,
    role: 'alertdialog',
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(dialog.machine, context);

  return reflect(() => {
    const o = dialog.connect(service, normalizeProps);

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
