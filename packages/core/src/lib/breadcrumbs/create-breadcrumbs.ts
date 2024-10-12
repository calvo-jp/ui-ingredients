import {ariaAttr, dataAttr} from '@zag-js/dom-query';
import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLLiAttributes,
  HTMLOlAttributes,
} from 'svelte/elements';
import {parts} from './breadcrumbs-anatomy.js';

export interface LinkProps {
  href: string;
  current?: boolean;
}

export interface CreateBreadcrumbsReturn {
  getRootProps(): HTMLAttributes<HTMLElement>;
  getListProps(): HTMLOlAttributes;
  getItemProps(): HTMLLiAttributes;
  getLinkProps(props: LinkProps): HTMLAnchorAttributes;
  getSeparatorProps(): HTMLAttributes<HTMLElement>;
}

export function createBreadcrumbs(): CreateBreadcrumbsReturn {
  function getRootProps(): HTMLAttributes<HTMLElement> {
    return {
      role: 'navigation',
      'aria-label': 'Breadcrumb',
      ...parts.root.attrs,
    };
  }

  function getListProps(): HTMLOlAttributes {
    return {
      role: 'list',
      ...parts.list.attrs,
    };
  }

  function getItemProps(): HTMLLiAttributes {
    return {
      role: 'listitem',
      ...parts.item.attrs,
    };
  }

  function getLinkProps(props: LinkProps): HTMLAnchorAttributes {
    return {
      role: 'link',
      href: props.current ? undefined : props.href,
      'aria-current': props.current ? 'page' : undefined,
      'data-current': dataAttr(props.current),
      'aria-disabled': ariaAttr(props.current),
      'data-disabled': dataAttr(props.current),
      ...parts.link.attrs,
    };
  }

  function getSeparatorProps(): HTMLAttributes<HTMLElement> {
    return {
      'aria-hidden': true,
      ...parts.separator.attrs,
    };
  }

  return {
    getRootProps,
    getListProps,
    getItemProps,
    getLinkProps,
    getSeparatorProps,
  };
}
