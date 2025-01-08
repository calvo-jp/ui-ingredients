import {createUniqueId} from '$lib/create-unique-id.js';
import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
import {getDocument, getWindow} from '@zag-js/dom-query';
import type {HTMLAttributes} from 'svelte/elements';
import {parts} from './alert-anatomy.js';

interface ElementIds {
  root: string;
  title: string;
  description: string;
  indicator: string;
}

export interface CreateAlertProps {
  id?: string;
  ids?: ElementIds;
}

export interface CreateAlertReturn {
  getRootProps(): HTMLAttributes<HTMLElement>;
  getTitleProps(): HTMLAttributes<HTMLElement>;
  getDescriptionProps(): HTMLAttributes<HTMLElement>;
  getIndicatorProps(): HTMLAttributes<HTMLElement>;
}

export function createAlert(props: CreateAlertProps): CreateAlertReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const uid = createUniqueId();
  const id = $derived(props.id ?? uid);
  const ids: ElementIds = $derived({
    root: props.ids?.root ?? `alert:${id}`,
    title: props.ids?.title ?? `alert:${id}:title`,
    description: props.ids?.description ?? `alert:${id}:description`,
    indicator: props.ids?.indicator ?? `alert:${id}:indicator`,
  });

  let hasTitle = $state(false);
  let hasDescription = $state(false);

  $effect(() => {
    const rootNode = environment?.getRootNode() ?? document;

    const doc = getDocument(rootNode);
    const win = getWindow(rootNode);

    function handler() {
      hasTitle = doc.getElementById(ids.title) !== null;
      hasDescription = doc.getElementById(ids.description) !== null;
    }

    handler();

    const observer = new win.MutationObserver(handler);
    observer.observe(rootNode, {childList: true, subtree: true});

    return () => observer.disconnect();
  });

  function getRootProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.root,
      dir: locale?.dir,
      role: 'alert',
      'aria-labelledby': hasTitle ? ids.title : undefined,
      'aria-describedby': hasDescription ? ids.description : undefined,
      ...parts.root.attrs,
    };
  }

  function getTitleProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.title,
      dir: locale?.dir,
      ...parts.title.attrs,
    };
  }

  function getDescriptionProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.description,
      dir: locale?.dir,
      ...parts.description.attrs,
    };
  }

  function getIndicatorProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.indicator,
      dir: locale?.dir,
      'aria-hidden': true,
      ...parts.indicator.attrs,
    };
  }

  return {
    getRootProps,
    getTitleProps,
    getDescriptionProps,
    getIndicatorProps,
  };
}
