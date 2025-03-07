import * as dialog from '@zag-js/dialog';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import type {HTMLAttributes} from 'svelte/elements';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
import {parts} from './drawer-anatomy.js';

interface ElementIds extends dialog.ElementIds {
  body?: string;
  footer?: string;
  header?: string;
}

export interface CreateDrawerProps
  extends Omit<dialog.Props, 'dir' | 'role' | 'getRootNode' | 'elementIds'> {
  elementIds?: ElementIds;
}

export interface CreateDrawerReturn extends dialog.Api {
  getBodyProps(): HTMLAttributes<HTMLElement>;
  getFooterProps(): HTMLAttributes<HTMLElement>;
  getHeaderProps(): HTMLAttributes<HTMLElement>;
}

export function createDrawer(props: CreateDrawerProps): CreateDrawerReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(
    dialog.machine,
    (): dialog.Props => ({
      dir: locale?.dir,
      role: 'dialog',
      getRootNode: environment?.getRootNode,
      ...props,
    }),
  );

  return reflect(() => {
    const api = dialog.connect(service, normalizeProps);

    return {
      ...api,
      getBackdropProps() {
        return {
          ...api.getBackdropProps(),
          ...parts.backdrop.attrs,
        };
      },
      getCloseTriggerProps() {
        return {
          ...api.getCloseTriggerProps(),
          ...parts.closeTrigger.attrs,
        };
      },
      getContentProps() {
        return {
          ...api.getContentProps(),
          ...parts.content.attrs,
        };
      },
      getDescriptionProps() {
        return {
          ...api.getDescriptionProps(),
          ...parts.description.attrs,
        };
      },
      getPositionerProps() {
        return {
          ...api.getPositionerProps(),
          ...parts.positioner.attrs,
        };
      },
      getTitleProps() {
        return {
          ...api.getTitleProps(),
          ...parts.title.attrs,
        };
      },
      getTriggerProps() {
        return {
          ...api.getTriggerProps(),
          ...parts.trigger.attrs,
        };
      },
      getBodyProps() {
        return {
          id: props.elementIds?.body ?? `drawer:${props.id}:body`,
          'data-state': api.open ? 'open' : 'closed',
          ...parts.body.attrs,
        };
      },
      getFooterProps() {
        return {
          id: props.elementIds?.footer ?? `drawer:${props.id}:footer`,
          'data-state': api.open ? 'open' : 'closed',
          ...parts.footer.attrs,
        };
      },
      getHeaderProps() {
        return {
          id: props.elementIds?.header ?? `drawer:${props.id}:header`,
          'data-state': api.open ? 'open' : 'closed',
          ...parts.header.attrs,
        };
      },
    };
  });
}
