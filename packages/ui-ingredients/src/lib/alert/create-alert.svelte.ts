import type {HTMLAttributes} from 'svelte/elements';
import {parts} from './alert-anatomy.js';

export interface CreateAlertReturn {
  getRootProps(): HTMLAttributes<HTMLElement>;
  getTitleProps(): HTMLAttributes<HTMLElement>;
  getDescriptionProps(): HTMLAttributes<HTMLElement>;
  getIndicatorProps(): HTMLAttributes<HTMLElement>;
}

export function createAlert(): CreateAlertReturn {
  function getRootProps(): HTMLAttributes<HTMLElement> {
    return {
      role: 'alert',
      ...parts.root.attrs,
    };
  }

  function getTitleProps(): HTMLAttributes<HTMLElement> {
    return {
      ...parts.title.attrs,
    };
  }

  function getDescriptionProps(): HTMLAttributes<HTMLElement> {
    return {
      ...parts.description.attrs,
    };
  }

  function getIndicatorProps(): HTMLAttributes<HTMLElement> {
    return {
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
