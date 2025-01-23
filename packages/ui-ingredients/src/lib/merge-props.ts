import {mergeProps as zagMergeProps} from '@zag-js/core';
import {clsx} from 'clsx';
import type {GenericObject} from './types.js';

export function mergeProps(...args: GenericObject[]): GenericObject {
  let res: GenericObject = {};

  /* class */
  for (const arg of args) {
    const obj = {...arg};

    if (obj.class) obj.class = clsx(arg.class);

    res = zagMergeProps(res, obj);
  }

  /* style */
  if (res.style) {
    let style = '';

    for (const key in res.style) {
      const val = res.style[key];
      style += `${key}:${val};`;
    }

    res.style = style;
  }

  return res;
}
