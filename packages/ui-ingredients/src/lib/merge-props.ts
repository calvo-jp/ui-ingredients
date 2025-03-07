import {mergeProps as zagMergeProps} from '@zag-js/svelte';
import {clsx} from 'clsx';
import type {GenericObject} from './types.js';

export function mergeProps(...args: GenericObject[]): GenericObject {
  const l: GenericObject[] = [];

  /* support svelte class value */
  for (const o of args) {
    const c = {...o};

    if (c.class && !isString(c.class)) {
      c.class = clsx(o.class);
    }

    if (c.className && !isString(c.class)) {
      c.className = clsx(o.className);
    }

    l.push(c);
  }

  return zagMergeProps(...l);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}
