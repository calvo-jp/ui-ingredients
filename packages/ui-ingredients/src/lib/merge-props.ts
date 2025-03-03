import {mergeProps as zagMergeProps} from '@zag-js/svelte';
import {clsx} from 'clsx';
import type {GenericObject} from './types.js';

export function mergeProps(...args: GenericObject[]): GenericObject {
  let res: GenericObject = {};

  /* support svelte class value */
  for (const arg of args) {
    const obj = {...arg};
    if (obj.class) obj.class = clsx(arg.class);
    res = zagMergeProps(res, obj);
  }

  return res;
}
