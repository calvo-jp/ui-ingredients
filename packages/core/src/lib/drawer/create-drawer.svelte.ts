import * as dialog from '@zag-js/dialog';
import {mergeProps, normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import type {HTMLAttributes} from 'svelte/elements';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import {parts} from './drawer-anatomy.js';

export interface CreateDrawerProps
  extends Omit<
    dialog.Context,
    'id' | 'dir' | 'role' | 'getRootNode' | 'open.controlled'
  > {
  id?: string;
  openControlled?: boolean;
}

export interface CreateDrawerReturn extends dialog.Api {
  getBodyProps(): HTMLAttributes<HTMLElement>;
  getFooterProps(): HTMLAttributes<HTMLElement>;
  getHeaderProps(): HTMLAttributes<HTMLElement>;
}

export function createDrawer(props: CreateDrawerProps): CreateDrawerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: dialog.Context = reflect(() => ({
    id,
    dir: locale?.dir,
    role: 'dialog',
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
      getBodyProps() {
        return {
          ...parts.body.attrs,
          'data-state': o.open ? 'open' : 'closed',
        };
      },
      getFooterProps() {
        return {
          ...parts.footer.attrs,
          'data-state': o.open ? 'open' : 'closed',
        };
      },
      getHeaderProps() {
        return {
          ...parts.header.attrs,
          'data-state': o.open ? 'open' : 'closed',
        };
      },
    };
  });
}
